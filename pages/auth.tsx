import {useState, useCallback} from "react";
import Input from "../components/Input";
import axios from 'axios';
import {signIn} from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';

const Auth = ()=>{

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>currentVariant==='login'?'register':'login');
    },[]);

    const login = useCallback(async()=>{
        try{
            const res = await signIn('credentials',{email, password, callbackUrl:'/'});
            if (res?.error) { console.log("Error  - ",res.error); }
        } catch(error){
            console.log(error);
        }
    },[email, password]);

    const register = useCallback(async ()=>{
        try{
            const res= await axios.post('/api/register',{email, name, password});
            login();
        } catch(error) {
            console.log(error);
        }
    },[email, name, password,login]);

    

    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpeg')] bg-no-repeat bg-left bg-fixed  bg-contain bg-black">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-8 py-3">
                    {/* <img src="/images/logo.png" alt="Logo" className="h-12"/> */}
                </nav>
               <div className="flex justify-end px-4">
                    <div className="bg-[#252525] bg-opacity-70 px-16 p-16 self-center rounded-[20px] lg:w-2/5 lg:max-w-md w-full md:mr-[80px] mt-[100px] backdrop-blur-[25px]">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant==='login'?'Sign In':'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant==='register'&&(
                                <Input 
                                label="Username"
                                onChange={(e:any)=>setName(e.target.value)}
                                id="name"
                                value={name}
                            />
                            )}
                            
                            <Input 
                                label="Email"
                                onChange={(e:any)=>setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label="Password"
                                onChange={(e:any)=>setPassword(e.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={variant==='login'?login:register} className="bg-[#FFA31A] py-3 text-black font-semibold rounded-md w-full mt-10
                        hover:bg-[#99620F] transition-">
                            {variant==='login'?'Login':'Sign Up'}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div onClick={(e)=>{
                                e.preventDefault();
                                signIn('google',{callbackUrl:'/'});
                                }} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={30}/>
                            </div>
                            <div onClick={()=>signIn('github',{callbackUrl:'/'})} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant==='login'?'New to TuneHub?':'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant==='login'?'Create Account':'Login'}
                            </span>
                        </p>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Auth;