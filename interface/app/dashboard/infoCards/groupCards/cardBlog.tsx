import { FaBook } from 'react-icons/fa';

const CardBlog = ({ title = "Blog Oficial:", link = "https://blog.estagiar-br.com.br/", description = "Estágiar" }) => {
    return ( 
        <a href={link} target="_blank" rel="noopener noreferrer" className="cardDashboard pt-6 pb-6 pl-4 pr-4 lg:pl-10 lg:pr-10 border border-gray-300 rounded-lg w-full" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem'}}>
            <div className='flex flex-col lg:flex-row gap-4 lg:justify-between mb-6 containerCards1'>
                <div className="flex flex-col gap-2">
                    <span className="text-gray-500 text-base">{title}</span> 
                    <div>
                        <h2 className="text-black text-2xl font-bold">{description}</h2> 
                    </div>
                </div>
                <div className='p-2 pl-4 pr-4 flex items-center justify-center rounded-lg lg:ml-auto' style={{ background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))', boxShadow: 'rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem' }}>
                    <FaBook size={32} className="text-white" />
                </div>
            </div>
            <div style={{lineHeight: '100%'}}>
                <span className="text-gray-400 text-base text-sm">Dicas para conseguir um estágio, desde entrevistas até desenvolvimento de soft skills.</span>
            </div>
        </a>
     );
}
 
export default CardBlog;
