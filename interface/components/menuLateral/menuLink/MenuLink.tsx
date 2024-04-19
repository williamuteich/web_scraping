import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from 'react-icons'; 

interface MenuItem {
    title: string;
    path: string;
    icon: string | IconType;
}

const MenuLink = ({ item }: { item: MenuItem }) => {
    const pathname = usePathname();
    return (
        <Link href={item.path} passHref>
            <div className={`flex gap-2 items-center pt-2 pb-2  pl-4  ${pathname === item.path ? ' rounded-md bg-[var(--corFundoMenu)]' : ''}`} onClick={() => {}}>
                {typeof item.icon === 'string' ? (
                    <img src={item.icon} alt={item.title} className="w-auto h-8"/> 
                ) : (
                    <item.icon size={23} color="white"/> 
                )}
                <div className={`text-white transition duration-300 ${pathname === item.path ? 'border-white' : 'border-transparent'} hover:border-white`}>
                    <span className="text-base">{item.title}</span>
                </div>
            </div>
        </Link>
    );
}
 
export default MenuLink;
