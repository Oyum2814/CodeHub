import Image from 'next/image';
import logo from '@/public/images/logo.png';
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs';
import {useState,useCallback,useEffect} from 'react';
import profileImg from '@/public/images/default-blue.jpeg'
import AccountMenu from './AccountMenu';
import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import useCurrentUser from '@/hooks/useCurrentUser';

const TOP_OFFSET=66;

const Navbar = ()=>{
    const [showMobileMenu,setShowMobileMenu] =useState(false);
    const [showAccountMenu,setShowAccountMenu] =useState(false);
    const {data:user} = useCurrentUser();
    const [showBackground,setShowBackground]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>= TOP_OFFSET)
            {
                setShowBackground(true);
            }
            else
            {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]);
    
    const toggleMobileMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current);
    },[]);
    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current);
    },[]);

    

    return (
        <nav className="w-full fixed z-40">
                <div className={`px-4 md:px-16 py-6 flex items-center transition 
                duration-500 ${showBackground?'bg-neutral-200 bg-opacity-95':''}`}>
                <Image className="h-1 w-auto lg:h-7" src={logo} alt="Logo" />
                <div className="flex-row ml-12 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" route="/"/>
                    <NavbarItem label="My List" route="/myList"/>
                    <NavbarItem label = "Private Lessons" route=""/>
                    
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-black text-sm">Browse</p>
                    <BsChevronDown className={`text-black transition ${showMobileMenu?'rotate-180':'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    {/* <div className="text-black hover:scale-125 cursor-pointer transition">
                        <BsSearch />
                    </div> */}
                    <div className="text-black hover:scale-125 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full overflow-hidden">
                        <Image width="80" height="80"
                    className="h-10 w-10 object-contain rounded-full"
                    src={user?.image? user.image : 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'} alt="profileImage"/>
                        </div>
                        <BsChevronDown className={`text-black transition hover:scale-125 ${showAccountMenu?'rotate-180':'rotate-0'}`}/>
                    </div>
                    <AccountMenu visible={showAccountMenu}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;