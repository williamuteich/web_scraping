import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const RedesSociais = () => {
    return(
    <div className='flex flex-col gap-2 items-center'>
        <h3 className='text-black text-sm'>Nos acompanhe nas redes sociais!</h3>
        <div className='flex gap-1'>
            <a href='https://www.facebook.com/estagiar.br' target='_blank'>
                <FaFacebookF size={26} color="#3b5998" style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a> 
            <a href='https://www.linkedin.com/company/estagiar/' target='_blank'>
                <FaLinkedinIn size={26} color="#0077b5" style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
            <a href='https://twitter.com/estagiar_br' target='_blank'>
                <FaTwitter size={26} color="#1da1f2" style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a> 
            <a href='https://www.instagram.com/' target='_blank'>
                <FaInstagram size={26} color="#c13584" style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
            <a href='https://www.youtube.com/channel/UCTmhu-z-L8qwIUGPfKtYJ5A' target='_blank'>
                <FaYoutube size={26} color="#ff0000" style={{ transition: 'transform 0.3s', transform: 'scale(1)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </a>
        </div>
      </div>
    );
}

export default RedesSociais;