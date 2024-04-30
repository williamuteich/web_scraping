import { FaTrophy  } from 'react-icons/fa';

interface VagasRecentesProps {
    nomeVaga: any
}
const VagasRecentes =({nomeVaga} : VagasRecentesProps) => {

    return ( 
        <div className='mt-6'>    
            <h4 className="text-lg text-gray-500 font-semibold mb-4 flex items-center gap-2"><FaTrophy color='#000000a3' size={21}/>Top Vagas:</h4>
            <div className='mb-2 flex items-center gap-2'>
                <span className="text-black p-2 rounded" style={{fontSize: '1px', background: 'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))'}}>-</span>
                <span className='text-black'>{nomeVaga[0]}</span>
            </div>
            <div className='mb-2 flex items-center gap-2'>
                <span className="text-black p-2 rounded" style={{fontSize: '1px', background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))'}}>-</span>
                <span className='text-black'>{nomeVaga[1]}</span>
            </div>
            <div className='mb-2 flex items-center gap-2'>
                <span className="text-black p-2 bg-red-300 rounded" style={{fontSize: '1px', background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))'}}>-</span>
                <span className='text-black'>{nomeVaga[2]}</span>
            </div>
            <div className='mb-2 flex items-center gap-2'>
                <span className="text-black p-2 rounded" style={{fontSize: '1px', background: 'linear-gradient(195deg, rgb(214 243 63), rgb(164 187 2))'}}>-</span>
                <span className='text-black'>{nomeVaga[3]}</span>
            </div>

        </div>
     );
}
 
export default VagasRecentes;