import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import NavBuscar from './components/navMenu';
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
  const [menuFixed, setMenuFixed] = useState(false); // Adicionado o estado para o menu suspenso


  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    setMenuFixed(false)
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

  const handleMenuSuspenso = (value: boolean) => {
    setMenuFixed(value);
  };

  return (
    <div className='relative'>
      {/* Passando a função para controlar o estado do menu suspenso */}
      <NavBuscar onChange={filtrarVagas} buscar={buscar} menuFixed={menuFixed} setMenuFixed={setMenuFixed}/>
      <div className='flex gap-4 mb-4'>
        <FiltrosVaga vagas={vagas} setVagasFiltradas={setVagasFiltradas}/>
        <button className="bg-[var(--corPrincipal)] text-white text-sm pl-6 pr-6 rounded-lg border border-solid border-black hover:bg-white hover:text-[var(--corPrincipal)] transition duration-300">
              Atualizar
        </button>
      </div>
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
              <p className='text-sm text-gray-500 h-auto'>
                {vaga.detalhes[0].length > 250 ? vaga.detalhes[0].slice(0, 250) + '...' : vaga.detalhes[0]}
              </p>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => toggleAccordion(index)} 
                 className="text-sm w-full pt-2 pb-2 justify-center flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded-md transition duration-300 hover:bg-white"
                >
                  <span>Mais Informações</span>
                </button>
                {openIndex === index && (
                  <CustomModal isOpen={openIndex === index} onRequestClose={() => { toggleAccordion(index); handleMenuSuspenso(false); }}>
                    <MoreInfo titulo={vaga.vaga} detalheVaga={vaga.detalhes} codeVaga={vaga.codigo} onRequestClose={() => { toggleAccordion(index); handleMenuSuspenso(false); }}/>
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
