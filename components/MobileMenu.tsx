import React from 'react';
import Link from 'next/link'
interface MobileMenuProps{
    visible?: boolean;
}

const MobileMenu:React.FC<MobileMenuProps>=({visible})=>{
    if(!visible)
    {
        return null;
    }
    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex rounded-lg">
            <div className="flex flex-col gap-4">
                <Link href='/' className="px-3 text-center text-white hover:underline">
                    Home
                </Link>
                <Link href='/myList' className="px-3 text-center text-white hover:underline">
                    My Learning
                </Link>
            </div>
        </div>
    )
};

export default MobileMenu;