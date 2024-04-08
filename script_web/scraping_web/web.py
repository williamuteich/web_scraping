import requests
from bs4 import BeautifulSoup
import pandas as pd

class Site:
    def __init__(self):
        self.url = 'https://www.estagiar-br.com.br/oportunidades'
        self.news = {}  
    def update_vagas(self):
        browsers = {'User-Agent': "Mozilla/5.0 (Windows NT 10.0; win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/ 86.0.4240.198Safari / 537.36"}
        page = requests.get(self.url, headers=browsers)

        resposta = page.text
        soup = BeautifulSoup(resposta, 'html.parser')
        vagas = soup.find_all('a', class_="oportunidade-item-link-wrapper")

        tag_class1 = 'title'  # Titulo da vaga
        tag_class2 = 'text'  # subtitulo
        tag_class3 = 'icon' #imagem

        vagas_dict_estagiar = {}
        base_url = "https://www.estagiar-br.com.br"

        for i, vaga in enumerate(vagas):
            if (vaga.h4 != None) and (tag_class1 in vaga.h4.get('class')):
                title = vaga.h4.text
                paragrafo = vaga.p.text if (vaga.p != None) and (tag_class2 in vaga.p.get('class')) else ''
                imagem = vaga.img.get('src') if vaga.img and vaga.img.get('class') else ''
                vagas_dict_estagiar[title, paragrafo, imagem] = base_url + vaga.get('href')

        self.news = vagas_dict_estagiar