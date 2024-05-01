import { FaBars } from "react-icons/fa";
import { slide as Menu } from "react-burger-menu";
import Menulateral from "../menuLateral/page";
import { useState } from "react";

const MenuMobileSuspenso = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState (false)

    return ( 
        <div className="p-3">
            <div className="flex gap-2">
                <div className="relative">
                    <button className="relative" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                        <FaBars className="w-6 h-6" />
                    </button>
                    {openMenuMobile &&(
                    <Menu className="top-0 left-0">
                        <Menulateral/>
                    </Menu>
                    )}
                </div>
                <div className="flex gap-1">
                    <span className="text-black underline">Vagas</span>
                    <span className="text-yellow-400 underline">Estágio</span>
                </div>
            </div>
        </div>
     );
}
 
export default MenuMobileSuspenso;