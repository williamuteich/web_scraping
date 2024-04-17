import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import MenuSuspenso from './menuSuspenso';

interface NavBuscarProps {
  buscar: string;
  onChange: (termo: string) => void;
  menuFixed: boolean; // Adicione a propriedade menuFixed à interface
  setMenuFixed: (value: boolean) => void; // Adicione a propriedade setMenuFixed à interface
}


const NavBuscar: React.FC<NavBuscarProps> = ({ onChange, buscar, menuFixed, setMenuFixed }) => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const alturaDiv = document.getElementById('menuSuspenso')?.getBoundingClientRect().top;
      const menuSuspensoHeight = document.getElementById('menuSuspenso')?.clientHeight;

      if (alturaDiv !== undefined && menuSuspensoHeight !== undefined) {
        const limiteInferior = -menuSuspensoHeight * 0.75; 
        const limiteSuperior = menuSuspensoHeight * 0.25; 

        if (scrollY > alturaDiv && alturaDiv < limiteInferior) {
          setMenuFixed(true);
        } else if (alturaDiv > limiteSuperior) {
          setMenuFixed(false);
        }
      }
    };

    const handlePageLoad = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);


  return ( 
    <div className="shadow-lg relative"> 
      <div className='flex gap-1 justify-end rounded-t-lg p-2 pl-8 pr-8' style={{background: '#182237'}}>
        <a href='https://www.facebook.com/estagiar.br' target='_blank'>
          <FaFacebookF 
            size={18} 
            color="white" 
            style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
          />
        </a> 
        <a href='https://www.linkedin.com/company/estagiar/' target='_blank'>
          <FaLinkedinIn 
            size={18} 
            color="white" 
            style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
          />
        </a>
        <a href='https://twitter.com/estagiar_br' target='_blank'>
          <FaTwitter 
            size={18} 
            color="white" 
            style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
          />
        </a> 
        <a href='https://www.instagram.com/' target='_blank'>
          <FaInstagram 
            size={18} 
            color="white" 
            style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
          />
        </a>
        <a href='https://www.youtube.com/channel/UCTmhu-z-L8qwIUGPfKtYJ5A' target='_blank'>
          <FaYoutube 
            size={18} 
            color="white" 
            style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
          />
        </a>
      </div>
      <div className="p-2 pl-6 pr-6 flex items-center justify-center border border-solid border-[#00000029] rounded-sm">
        <div className='flex gap-20 justify-between items-center w-full'>
          <div>
            <img src="/logoestagiar.png" className='w-28 h-auto' alt="estagiar" />
          </div>
          <div className='flex gap-4 justify-between'>
            <div className="relative">
              <input
                type="text"
                onChange={(e) => onChange(e.target.value)} 
                value={buscar}
                placeholder="Buscar Vaga..."
                className="bg-white border border-solid rounded-lg py-1 px-4 pr-2 outline-none focus:ring-1 focus:ring-[var(--corPrincipal)] focus:ring-opacity-50 w-full text-gray-500 text-base"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 mb-10 text-center border border-solid  bg-[#00000017]" id='menuSuspenso'>
        <span className='text-sm capitalize font-semibold text-gray-500'>Descubra oportunidades de estágio! Explore as melhores vagas para impulsionar sua carreira.</span>
      </div>
      {menuFixed &&(
        <MenuSuspenso onChange={onChange} buscar={buscar} />
      )}
    </div>
  );
};

export default NavBuscar;
