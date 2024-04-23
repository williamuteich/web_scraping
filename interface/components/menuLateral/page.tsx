"use client"

import MenuLink from "./menuLink/MenuLink";
import { FaHome, FaLinkedin  } from 'react-icons/fa'; 

const Menulateral = () => {
    const menuItem = [
        {
            title: 'Home',
            list: [
                {
                    title: "DashBoard",
                    path: '/',
                    icon: FaHome,
                },
            ]
        },
        {
            title: 'Plataformas',
            list: [
                {
                    title: "Estagiar",
                    path: '/Estagiar',
                    icon: '/estagiar.png'
                },
                {
                    title: "Linkedin",
                    path: '/Estagiar/vaga',
                    icon: FaLinkedin,
                },
            ]
        }
    ];
    return ( 
        <div className="h-screen bg-[var(--corPrincipal)] left-0 top-0 pl-6 pr-6 py-8" style={{ position: 'fixed', width: '275px', boxShadow: '7px 0px 10px #151c2c70' }}>
            <div className="flex items-center justify-center">
                <img src="/vagaonlines.png" alt="vagasLogo" className="w-36 h-auto"/>
            </div>
            <ul className="mt-2 flex flex-col gap-3 ">
            {menuItem.map(section => (
                <li key={section.title}>
                    <span className="text-sm text-gray-400 ">{section.title}</span>
                    <ul className="">
                        {section.list.map(linkItem => (
                            <li key={linkItem.title}>
                                <MenuLink item={linkItem} />
                            </li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
     );
}
 
export default Menulateral;
