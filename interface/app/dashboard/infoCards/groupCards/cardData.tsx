import { FaCalendar  } from 'react-icons/fa';

const CardData = ({ title = "Data Atualização:", link = "#", description = "05/04/24" }) => {
    return ( 
        <div className="cardDashboard pt-6 pb-6 pl-10 pr-10 border border-gray-300 rounded-lg w-2/6" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem'}}>
            <div className='flex gap-4 justify-between mb-6'>
                <div className="flex flex-col gap-2">
                        <span className="text-gray-500 text-base">{title}</span> 
                    <div>
                        <h2 className="text-black text-3xl font-bold">{description}</h2> 
                    </div>
                </div>
                <div className='cardDashboard p-2 pl-4 pr-4 flex items-center justify-center rounded-lg' style={{ background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))', boxShadow: 'rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(76, 175, 79, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem' }}>
                    <FaCalendar  size={32} className="text-white" />
                </div>
            </div>
            <div style={{lineHeight: '100%'}}>
                <span className="text-gray-400 text-base text-sm">
                    Confira as oportunidades mais recentes e dê um passo em direção ao seu futuro profissional.
                    Explore novas vagas e esteja preparado para se destacar no mercado de trabalho!

                 </span>
            </div>
        </div>
     );
}
 
export default CardData
