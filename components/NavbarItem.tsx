import React from "react";
import Link from "next/link"
interface NavbarItemProps{
    label:string;
    route:string;
}

const NavbarItem:React.FC<NavbarItemProps> = ({label,route})=>{
    return (
        <Link href={route} className="text-black cursor-pointer hover:font-semibold transition">
            {label}
        </Link>
    )
}
export default NavbarItem;