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
        <div className=" fixed h-screen w-60 left-0 top-0 px-8 py-8 bg-[var(--corPrincipal)]">
            <div>
                <h1 style={{ filter: 'drop-shadow(1px 3px 1px orange)' }} className="text-2xl font-bold">
                    Vagas Estágio
                </h1>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
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
