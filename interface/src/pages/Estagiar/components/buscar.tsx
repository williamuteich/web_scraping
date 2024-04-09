import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NavBuscarProps {
  setBuscar: React.Dispatch<React.SetStateAction<string>>;
  buscar: string;
}

const NavBuscar: React.FC<NavBuscarProps> = ({ setBuscar, buscar }) => {
  const handleAtualizarClick = async () => {
    try {
      const response = await axios.get('/api/executePython'); // Faz a chamada à API
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return ( 
    <div className="p-2 pl-6 pr-6 flex items-center justify-center border border-solid border-[#00000029] rounded-sm">
      <div className='flex gap-20 justify-between items-center w-full'>
        <div>
         <img src="/logoestagiar.png" className='w-28 h-auto' alt="estagiar" />
        </div>
        <div className='flex gap-4 justify-between'>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => setBuscar(e.target.value)}
              value={buscar}
              placeholder="Buscar Vaga..."
              className="bg-white border border-solid rounded-lg py-1 px-4 pr-2 outline-none focus:ring-1 focus:ring-[var(--corPrincipal)] focus:ring-opacity-50 w-full text-gray-500 text-base"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-[var(--corPrincipal)] text-white text-sm pl-6 pr-6 rounded-lg border border-solid border-black hover:bg-white hover:text-[var(--corPrincipal)] transition duration-300">
            Atualizar
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default NavBuscar;
