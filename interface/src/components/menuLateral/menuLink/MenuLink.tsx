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
        <Link href={item.path} passHref className="flex gap-2 items-center pt-1 pb-1 pl-4">
            {typeof item.icon === 'string' ? (
                <img src={item.icon} alt={item.title} className="w-auto h-8"/> 
            ) : (
                <item.icon size={20} /> 
            )}
            <div className={`text-white transition duration-300 border-b-2 border-transparent hover:border-white ${pathname === item.path ? 'border-white' : ''}`}>
                <span className="text-base">{item.title}</span>
            </div>
        </Link>
    );
}
 
export default MenuLink;
