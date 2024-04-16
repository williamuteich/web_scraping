import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import NavBuscar from './components/buscar';
import MoreInfo from './components/infoModal';
import CustomModal from '@/components/modal/CustomModal';
import FiltrosVaga from './components/filtros';

const filePath: string = path.resolve('..', 'vagas.json');

export async function getStaticProps(): Promise<{ props: { vagas: any[] } }> {
  const fileData: string = fs.readFileSync(filePath, 'utf8');
  const vagas: any[] = JSON.parse(fileData);

  const vagasComCodigo: any[] = vagas.map((vaga: any) => {
    const codigo: string = vaga.code.split(' ').pop(); 
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [buscar, setBuscar] = useState('');
  const [vagasFiltradas, setVagasFiltradas] = useState<any[]>(vagas);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const filtrarVagas = (termo: string) => {
    const termoLowerCase = termo.toLowerCase();
    const vagasFiltradasInput = vagas.filter((vaga: any) =>
      vaga.vaga.toLowerCase().includes(termoLowerCase) ||
      vaga.detalhes.some((detalhe: string) => detalhe.toLowerCase().includes(termoLowerCase)) ||
      vaga.codigo.toLowerCase().includes(termoLowerCase)
    );
    setBuscar(termo);
    setVagasFiltradas(vagasFiltradasInput);
  };

  return (
    <div>
      <div className="shadow-lg"> 
        <NavBuscar onChange={filtrarVagas} buscar={buscar} />
        <div className="p-1 mb-6 text-center border border-solid  bg-[#00000017]">
          <span className='text-sm capitalize font-semibold text-gray-500'>Descubra oportunidades de estágio! Explore as melhores vagas para impulsionar sua carreira.</span>
        </div>
      </div>
      <FiltrosVaga vagas={vagas} setVagasFiltradas={setVagasFiltradas}/>
      <div className='grid grid-cols-3 gap-4 '>
        {vagasFiltradas.length > 0 ? (
          vagasFiltradas.map((vaga: any, index: number) => (
            <div key={index} className='p-3 card flex flex-col'>
              <div className='flex justify-end gap-4 items-center'>
                <span className='text-sm text-black text-end font-thin text-gray-500 underline'>Código: {vaga.codigo}</span>
              </div>
              <div className="h-14 w-20 overflow-hidden mb-2">
                <img src={vaga.imagem} className="w-full h-full object-contain" alt="Imagem da vaga" />
              </div>
              <h3 className='text-base font-semibold mb-2 text-blue-800 truncate'>{vaga.vaga}</h3>
              <p className='text-sm text-black truncate h-auto'>{vaga.detalhes}</p>
              <div className="mt-4 text-center">
                <button onClick={() => toggleAccordion(index)} className="text-sm w-full pt-2 pb-2 justify-center flex items-center space-x-1 bg-[var(--corPrincipal)] px-2 py-1 rounded-md transition duration-300">
                  <span>Mais Informações</span>
                </button>
                {openIndex === index && (
                  <CustomModal isOpen={openIndex === index} onRequestClose={() => toggleAccordion(index)}>
                    <MoreInfo codeVaga={vaga.codigo} detalheVaga={vaga.detalhes}/>
                  </CustomModal>
                )}
              </div>
            </div> 
          ))
        ) : (
          <div className=" text-gray-900 pl-10 mt-4">Sem resultados.</div>
        )}
      </div>
    </div>
  );
};

export default VagasComponent;
