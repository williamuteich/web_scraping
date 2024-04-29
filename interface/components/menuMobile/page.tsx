import { FaBars } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Menulateral from "../menuLateral/page";

const MenuMobileSuspenso = () => {
    
    return ( 
        <div className="p-3">
            <div className="flex gap-2">
                <button>
                    <FaBars className="w-6 h-6" />
                </button>
                <div className="flex gap-1">
                    <span className="text-black underline">Vagas</span>
                    <span className="text-yellow-400 underline">Estágio</span>
                </div>
            </div>
            <Menu className="top-0">
                <Menulateral />
            </Menu>
        </div>
     );
}
 
export default MenuMobileSuspenso;