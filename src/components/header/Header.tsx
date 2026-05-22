'use client';
import Link from "next/link";
import {Switch} from "@mui/material";
import {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const html = document.documentElement;
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [theme]);

    const changeTheme = ()=>{
        setTheme(prev =>(prev=== 'dark' ? 'light': 'dark') )
    };

    return (
        <header className='w-full h-[100px] bg-[#c4c1c1] dark:bg-gray-800 opacity-80'>
           <div className='w-3/4 h-full m-auto flex justify-between items-center text-2xl '>
               <h2>TMDb</h2>
               <ul className=' w-1/2 flex justify-between h-full items-center'>
                   <li><Link href={'/'}>Home</Link></li>
                   <li><Link href={'/movies'}>Movies</Link></li>
                   <li><Link href={'/search'}><SearchIcon fontSize={'large'}/> Search</Link></li>
               </ul>
               <div>Theme <Switch checked={theme=== 'light'} onChange={changeTheme}/></div>
           </div>
        </header>
    );
};

export default Header;