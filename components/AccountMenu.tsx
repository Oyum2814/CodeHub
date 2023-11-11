import {signOut} from 'next-auth/react';
import React from 'react';
import Image from 'next/image';
import profileImg from '@/public/images/default-blue.jpeg';
import useCurrentUser from '@/hooks/useCurrentUser';
import { profile } from 'console';
interface AccountMenuProps{
    visible?: boolean,
}
const AccountMenu:React.FC<AccountMenuProps> =({visible})=>{
    if (!visible) return null;
    const {data:user} = useCurrentUser();
    return (
        <div className="border-[0.5px] rounded-md bg-white w-56 absolute top-14 right-0 py-5 m-4 flex-col border-1 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row items-center w-full">
                    <Image width="80" height="80"
                    className="h-10 w-10 object-contain rounded-full"
                    src={user?.image? user.image : 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'} alt="profileImage"/>
                    <p className="text-black ml-4 text-md cursor-default font-semibold">
                        {user?.name}
                    </p>
                </div>
                <hr className="bg-gray-600 border-0 h-[0.5px] my-4"/>
                <div onClick={()=>signOut()} className="text-center text-white text-sm bg-blue-500 hover:bg-blue-600 w-[90%] px-4 py-2 mx-auto rounded-md font-bold cursor-pointer">
                    Sign Out
                </div>
            </div>
        </div>
    );
};
export default AccountMenu;