import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';


const filePath: string = path.resolve('..' ,'vagas.json');

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
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    const isOpen = openIndexes.includes(index);
    const updatedIndexes = isOpen
      ? openIndexes.filter((item) => item !== index)
      : [...openIndexes, index];
    setOpenIndexes(updatedIndexes);
  };

  return (
    <div>
      <h1>Vagas de Emprego</h1>
      <div className='grid grid-cols-3 gap-4'>
        {vagas.map((vaga: any, index: number) => (
          <div key={index} className='p-3 card flex flex-col gap-1'>
            <span className='text-sm text-black text-end font-thin'>Código: {vaga.codigo}</span>
            <div className="h-14 w-20 overflow-hidden">
                <h1>aqui fica o component de busca</h1>
            </div>
            <h3 className='text-base font-semibold text-black'>{vaga.vaga}</h3>
            <p className='text-sm text-black'>Atualizado: {formatarData(vaga.data)}</p>
            <p className='text-sm text-black'>{vaga.descricao}</p>
            <div className="mt-4">
              <button onClick={() => toggleAccordion(index)} className="flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded-md transition duration-300">
                {openIndexes.includes(index) ? <FaArrowUp /> : <FaArrowDown />}
                <span>{openIndexes.includes(index) ? 'Fechar' : 'Abrir'}</span>
              </button>
              <div className={`accordion overflow-hidden transition-all duration-300 ${openIndexes.includes(index) ? 'h-auto' : 'h-0'}`}>
                <p className="bg-gray-100 px-4 py-2">Conteúdo do Acordeão</p>
              </div>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default VagasComponent;