import MenuLink from "./menuLink/MenuLink";

const Menulateral = () => {
    const menuItem = [
        {
            title: '',
            list: [
                {
                    title: "Home",
                    path: '/',
                    icon: 'fas fa-user-graduate'
                },
                {
                    title: "Vagas Estagiar",
                    path: '/Estagiar/vaga',
                    icon: 'fa fa-envelope'
                },
            ]
        }
    ];
    return ( 
        <div className=" fixed h-screen w-64 left-0 top-0 px-8 py-8 bg-[var(--corPrincipal)]">
            <div>
                <img className="w-20 h-auto rounded-full" src="/logoProjeto.png" alt="logo vagas" title="vagas" />
            </div>
            <ul>
            {menuItem.map(section => (
                <li key={section.title}>
                    <span >{section.title}</span>
                    <ul >
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
