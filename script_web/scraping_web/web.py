import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

class Site:
    def __init__(self):
        self.base_url = 'https://www.estagiar-br.com.br'
        self.url = f'{self.base_url}/oportunidades'
        self.url2 = f'{self.base_url}/Oportunidades/detalhe/estagio/{{}}'  # URL2 agora recebe um espaço reservado {}
        self.news = {}  

    def get_page_content(self, url):
        browsers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/ 86.0.4240.198 Safari / 537.36"}
        page = requests.get(url, headers=browsers)
        return page.text

    def process_vaga_details(self, vaga_info):
        page2_content = self.get_page_content(vaga_info['url2'])
        soup2 = BeautifulSoup(page2_content, 'html.parser')

        detalhes_vaga = soup2.find_all('div', class_='common-limiter') 

        for detalhe in detalhes_vaga:
            subtitulo = detalhe.h3.text if (detalhe.h3 != None) else 'n tem empresa'
            subParagrafo = detalhe.p.text if (detalhe.p != None) else 'n tem descrição'
            print('se n for, é gray', subParagrafo)

    def update_vagas(self):
        vagas_dict_estagiar = {}
        soup = BeautifulSoup(self.get_page_content(self.url), 'html.parser')
        vagas = soup.find_all('a')

        tag_class1 = 'title'  # Título da vaga
        tag_class2 = 'text'  # Subtítulo
        tag_class3 = 'code'  # Código

        tag_detalhe1 = 'container-title' 
        tag_detalhe2 = 'common-text' 

        executor = ThreadPoolExecutor(max_workers=5)  # Defina o número máximo de threads

        futures = []
        for vaga in vagas:
            if (vaga.h4 is not None) and (tag_class1 in vaga.h4.get('class')):
                title = vaga.h4.text
                paragrafo = vaga.p.text if (vaga.p is not None) and (tag_class2 in vaga.p.get('class')) else ''
                imagem = vaga.img.get('src') if vaga.img and vaga.img.get('class') else ''
                code = vaga.find('p', class_=tag_class3).text if vaga.find('p', class_=tag_class3) else 'vazio'
                vagas_dict_estagiar[title, paragrafo, imagem, code] = self.base_url + vaga.get('href')
                
                recebeCodigo = code.split(' ')[1]
                url2_with_code = self.url2.format(recebeCodigo)

                # Adiciona a requisição HTTP à lista de threads
                futures.append(executor.submit(self.get_page_content, url2_with_code))

        for future in futures:
            page2_content = future.result()
            soup2 = BeautifulSoup(page2_content, 'html.parser')

            detalhes_vaga = soup2.find_all('div', class_='common-limiter') 

            for detalhe in detalhes_vaga:
                subtitulo = detalhe.h3.text if (detalhe.h3 != None) and (tag_detalhe1 in detalhe.h3.get('class')) else 'n tem empresa'
                subParagrafo = detalhe.p.text if (detalhe.p != None) and (tag_detalhe2 in detalhe.p.get('class')) else 'n tem descrição'
                print('se n for, é gray', subParagrafo)

        self.news = vagas_dict_estagiar

recebe = Site()
recebe.update_vagas()
