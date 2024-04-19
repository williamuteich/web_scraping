import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, '..', 'vagas.json');

export async function fetchVagas() {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const vagas = JSON.parse(fileData);
    return vagas;
  } catch (error) {
    console.error('Erro ao buscar vagas:', error);
    return [];
  }
}
