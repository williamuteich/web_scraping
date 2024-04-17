import { FaSearch } from "react-icons/fa";

interface MenuSuspensoProps {
    buscar: string;
    onChange: (termo: string) => void;
}

const MenuSuspenso: React.FC<MenuSuspensoProps> = ({ onChange, buscar }) => {
    return(
        <div  className="fixed top-0 border border-solid bg-white" style={{ width: 'calc(86% - 14px)', zIndex: 99, boxShadow: '0px 6px 8px #0000004f', border: 'none', borderRadius: '0px 0px 5px 5px' }}>
            <div className="p-2 pl-6 pr-6 flex items-center justify-center">
                <div className='flex gap-20 justify-between items-center w-full'>
                <div>
                    <img src="/logoestagiar.png" className='w-20 h-auto' alt="estagiar" />
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
        </div>
    )
}

export default MenuSuspenso;