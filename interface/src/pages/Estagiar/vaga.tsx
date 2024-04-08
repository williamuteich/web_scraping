import fs from 'fs';
import React, { useState } from 'react';


const filePath: string = 'C:\\estudosPython\\vagas.json';

export async function getStaticProps(): Promise<{ props: { vagas: any[] } }> {
  const fileData: string = fs.readFileSync(filePath, 'utf8');
  const vagas: any[] = JSON.parse(fileData);

  const vagasComCodigo: any[] = vagas.map((vaga: any) => {
    const codigo: string = vaga.link.split('/').pop(); 
    return { ...vaga, codigo };
  });

  return {
    props: {
      vagas: vagasComCodigo,
    },
  };
}

const formatarData = (dataCompleta: any): string => {
  const dataObj: Date = new Date(dataCompleta);

  const hora: string = `${dataObj.getHours()}h${dataObj.getMinutes() < 10 ? '0' : ''}${dataObj.getMinutes()}m`;

  return `${hora}`;
};

const VagasComponent = ({ vagas }: { vagas: any[] }) => {
  const [ativarBotao, setAtivarBotao] = useState(false); // Aqui está o useState dentro do componente funcional
  console.log('antes de clicar', ativarBotao)

  const handleButton = () =>{
    setAtivarBotao((prevState) => !prevState);
    console.log('depoisssss', ativarBotao);
  }
  return (
    <div>
      <h1>Vagas de Emprego</h1>
      <div className='grid grid-cols-3 gap-4'>
        {vagas.map((vaga: any, index: number) => (
          <div key={index} className='p-3 card'>
            <h3 className='text-base font-semibold text-black'>{vaga.vaga}</h3>
            <p className='text-sm text-black'>{vaga.descricao}</p>
            <p className='text-sm text-black'>Atualizado: {formatarData(vaga.data)}</p>
            <p className='text-sm text-black'>Código: {vaga.codigo}</p>
            <div><button onClick={handleButton}> {ativarBotao ? 'ABRIR' : 'fechar'}</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VagasComponent;