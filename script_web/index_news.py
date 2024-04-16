import os
import subprocess
from scraping_web.web import Site
from threading import Thread
import time
from datetime import datetime
import json
import pandas as pd

class IndexNews:
    def __init__(self):
        print("Iniciando IndexNews...")
        self.site_principal = Site()

        # Define o caminho para salvar e ler o arquivo vagas.json na pasta "../web_scraping"
        diretorio_pai = os.path.abspath(os.path.join(os.getcwd(), os.pardir))  # Caminha um diretório acima do diretório atual
        pasta_web_scraping = os.path.join(diretorio_pai, 'web_scraping')
        self.arquivo_vagas = os.path.abspath(os.path.join(pasta_web_scraping, 'vagas.json'))

        self.vagas = self._read_file(self.arquivo_vagas) if os.path.exists(self.arquivo_vagas) else []
        df = pd.DataFrame(self.vagas)
        print("Vagas carregadas:", self.vagas)

        self.kill = False
        self.news_thread = Thread(target=self.update_vagas)
        self.news_thread.start()

    def _update_file(self, lista, mode):
        print("Atualizando arquivo...", mode)
        df = pd.DataFrame(lista)
        df.to_json(mode, orient='records')

    def _read_file(self, mode):
        print("Lendo arquivo...")
        try:
            df = pd.read_json(mode)
            print("Arquivo lido:", mode)
            return df.to_dict(orient='records')
        except ValueError:
            print("Arquivo vazio ou formato inválido.")
            return []

    def update_vagas(self):
        print("Atualizando vagas...")
        while not self.kill:
            print('Atualizando vaga...')
            self.site_principal.update_vagas()

            for code, value in self.site_principal.news.items():
                dict_aux = {}
                dict_aux['site'] = 'estagiar'
                dict_aux['imagem'] = value['imagem'] if 'imagem' in value else ''
                dict_aux['data'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                dict_aux['vaga'] = value['title'] if 'title' in value else ''
                dict_aux['code'] = code
                dict_aux['detalhes'] = value['detalhes_texto'] if 'detalhes_texto' in value else []

                if len(self.vagas) == 0:
                    print("Vagas vazias, inserindo nova vaga:", dict_aux)
                    self.vagas.append(dict_aux)
                    continue

                add_news = True
                for news in self.vagas:
                    if news['vaga'] == dict_aux['vaga']:
                        add_news = False
                        break

                if add_news:
                    print("Nova vaga encontrada, adicionando:", dict_aux)
                    self.vagas.append(dict_aux)

            self.vagas.sort(key=lambda x: datetime.strptime(x['data'], '%Y-%m-%d %H:%M:%S'), reverse=True)
            self._update_file(self.vagas, self.arquivo_vagas)
            time.sleep(1800)

# Instanciando a classe
self = IndexNews()