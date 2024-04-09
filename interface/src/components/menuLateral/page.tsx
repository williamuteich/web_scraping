import MenuLink from "./menuLink/MenuLink";
import { FaHome } from 'react-icons/fa'; 

const Menulateral = () => {
    const menuItem = [
        {
            title: 'Home',
            list: [
                {
                    title: "Dashboard",
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
                    path: '/Estagiar/vaga',
                    icon: '/estagiar.png'
                },
                {
                    title: "Linkedin",
                    path: '/Estagiar/vaga',
                    icon: '/linkedin.png'
                },
            ]
        }
    ];
    return ( 
        <div className="h-screen bg-[var(--corPrincipal)] left-0 top-0 pl-6 pr-6 py-8" style={{ position: 'fixed', width: 'calc(100% - 87%)', boxShadow: '7px 0px 10px #151c2c70;' }}>
            <div className="flex items-center justify-center">
                <img src="/vagaonlines.png" alt="vagasLogo" className="w-36 h-auto"/>
            </div>
            <ul className="mt-4 flex flex-col gap-3 ">
            {menuItem.map(section => (
                <li key={section.title}>
                    <span className="text-sm text-gray-400 ">{section.title}</span>
                    <ul className="mt-1">
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
