// pages/api/executePython.ts
import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Comando para executar o arquivo Python
  const comando = 'python index_news.py';

  // Executa o comando
  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      res.status(500).json({ error: 'Erro ao executar o comando' });
      return;
    }
    if (stderr) {
      console.error(`Erro ao executar o comando: ${stderr}`);
      res.status(500).json({ error: 'Erro ao executar o comando' });
      return;
    }
    console.log(`Saída do comando: ${stdout}`);
    res.status(200).json({ message: 'Comando executado com sucesso' });
  });
}
