import { useState } from 'react';
import { FaBalanceScale ,FaBriefcase, FaList, FaExclamationCircle, FaSearch, FaThumbsUp  } from 'react-icons/fa';
import RedesSociais from './redesSociais';

interface MoreInfoProps {
  titulo: string;
  codeVaga: string;
  detalheVaga: string[];
}

const MoreInfo: React.FC<MoreInfoProps> = ({ titulo, codeVaga, detalheVaga }) => {
  const [hovered, setHovered] = useState(false);

  let textoQuebrado2 = detalheVaga[2].toString();
  let textoAjustado = textoQuebrado2.lastIndexOf(')');
  let textoAjustado2 = textoQuebrado2.lastIndexOf('Cursos');

  if (textoAjustado !== -1 && textoAjustado2 !== -1) {
    const parteAntes = textoQuebrado2.substring(0, textoAjustado + 1);
    const parteDepois = textoQuebrado2.substring(textoAjustado2);
    
    const inicio = Math.max(textoAjustado2 - 14, 0); 
    const parteAntes2 = textoQuebrado2.substring(inicio, textoAjustado2);
  
    textoQuebrado2 = parteAntes + '<br>' + parteAntes2 + '<br>' + parteDepois;
  }
  const textoQuebrado1 = detalheVaga[3].split(/\r\n/g).join('<br>').replace('<br>', '');

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex gap-4 items-center'>
      <span className='p-2 border border-gray-400 rounded-lg'><FaBalanceScale size={45} color="#919191"/></span>
      <h1 className='text-gray-700 border-b border-solid border-gray-700'>{titulo}</h1>
      </div>
      <div className="flex gap-4">
        <div className="border-2 border-orange-500 border-solid p-6 w-1/2 bg-orange-500 rounded-lg">
          <span className='flex gap-2 items-center'>
            <FaBriefcase size={45} className='border-2 border-solid border-white rounded-lg p-2' />
            <h4 className='font-bold'>Empresa</h4>
          </span>
          <div className='pl-6 pt-1 pr-6 leading-3'><span className="text-base">{detalheVaga[0]}</span></div>
        </div>
        <div className="border-2 border border-blue-900 border-solid p-6 w-1/2 rounded-lg">
          <span style={{ color: '#003158' }} className='flex gap-2 items-center'>
            <FaSearch size={45} className='border-2 border-solid border-blue-900 rounded-lg p-2' />
            <h4 className='font-bold'>Descrição da atividade</h4>
          </span>
          <div className='pl-6 pt-1 pr-6 leading-3'><span className="text-blue-900 text-base">{detalheVaga[1]}</span></div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border-2 border-orange-500 border-solid p-6 rounded-lg w-2/1" style={{width: '40%'}}>
          <span style={{ color: 'rgb(249, 115, 22)' }} className='flex gap-2 items-center'>
            <FaList size={45} className='border-2 border-solid border-orange-500 rounded-lg p-2' />
            <h4 className='font-bold'>Requisitos</h4>
          </span>
          <div className='pl-6 pt-1 pr-6 leading-3'><span className="text-orange-500 text-base" dangerouslySetInnerHTML={{ __html: textoQuebrado2 }}></span></div>
        </div>
        <div className="border-2 border-gray-800 border-solid p-6 rounded-lg w-full" style={{ background: '#003158' }}>
          <span className='flex gap-2 items-center'>
            <FaExclamationCircle size={45} className='border-2 border-solid border-white rounded-lg p-2' />
            <h4 className='font-bold'>Informações</h4>
          </span>
          <div className='pl-6 pt-1 pr-6 leading-3'><span className="text-white text-base" dangerouslySetInnerHTML={{ __html: textoQuebrado1 }}></span></div>
        </div>
      </div>
      <div className='pt-6 flex flex-col gap-4 items-center'>
        <button 
          className='text-black border border-solid border-blue-800 rounded-lg pt-2 pb-2 pr-4 pl-4 flex items-center gap-4' 
          style={{ 
            border: '1px solid #003158',
            backgroundColor: hovered ? '#003158' : 'transparent',
            color: hovered ? '#ffffff' : '#000000',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FaThumbsUp size={16} color={hovered ? '#ffffff' : '#003158'} />
          <a href={`https://www.estagiar-br.com.br/Oportunidades/detalhe/estagio/${codeVaga}`} target='_blank'>Tenho Interesse</a>
      </button>
          <RedesSociais/>
      </div>
    </div>
  );
}

export default MoreInfo;
