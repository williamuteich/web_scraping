"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
    title: string;
    path: string;
    icon: string;
}

const MenuLink = ({ item }: { item: MenuItem }) => {
    const pathname = usePathname();
    return (
        <Link href={item.path} passHref>
            <div className={`text-white transition duration-300 border-b-2 border-transparent hover:border-white ${pathname === item.path ? 'border-white' : ''}`}>
                <span>{item.title}</span>
            </div>
        </Link>
    );
}
 
export default MenuLink;
