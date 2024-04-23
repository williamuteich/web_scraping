import { FaChartPie  } from 'react-icons/fa';

const CardTotal = ({ title = "Total de Vagas:", link = "#", description = "62" }) => {
    return ( 
        <div className="pt-6 pb-6 pl-10 pr-10 border border-gray-200 rounded-lg w-2/6" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem'}}>
            <div className='flex gap-4 justify-between mb-6'>
                <div className="flex flex-col gap-2">
                        <span className="text-gray-500 text-base">{title}</span> 
                    <div>
                        <h2 className="text-black text-3xl font-bold">{description}</h2> 
                    </div>
                </div>
                <div className='p-2 pl-4 pr-4 flex items-center justify-center rounded-lg' style={{ background: 'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))', boxShadow: 'rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(233, 30, 98, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem' }}>
                    <FaChartPie  size={32} className="text-white" />
                </div>
            </div>
            <div style={{lineHeight: '100%'}}>
                <span className="text-gray-400 text-base text-sm">
                    Acompanhe o total de vagas disponíveis e esteja sempre um passo à frente na busca por oportunidades profissionais.
                    Descubra as diversas áreas e empresas que estão oferecendo vagas.
                   
                </span>
            </div>
        </div>
     );
}
 
export default CardTotal;