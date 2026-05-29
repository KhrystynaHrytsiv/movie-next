'use client';
import Link from "next/link";
import {Switch} from "@mui/material";
import {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {SiThemoviedatabase} from "react-icons/si";


const Header = () => {
    const [theme, setTheme] = useState('dark');
    const [showSearch, setShowSearch] = useState(false);

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
        <header className='w-full h-[80px] bg-[#c4c1c1] dark:bg-gray-800 opacity-80 fixed top-0 z-30'>
            <div className='w-3/4 h-full m-auto flex justify-between items-center text-2xl '>
                <SiThemoviedatabase className='h-[80px] w-[80px]'/>
                <ul className=' w-1/2 flex justify-evenly h-full items-center'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/movies'}>Movies</Link></li>
                </ul>
                <div onFocus={() => setShowSearch(true)} onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setShowSearch(false)}}>
                    <form method='GET' action='/movies' className='flex gap-4'>
                        <input type='text' name='query' placeholder='Search'
                            className={`bg-transparent outline-none border-b border-current  placeholder:text-current transition-all duration-300 overflow-hidden 
                            ${showSearch ? 'w-[300px] opacity-100 px-2' : 'w-0 opacity-0'}`}/>
                        <button type='submit'><SearchIcon fontSize='large'/></button>
                    </form>
                </div>
                <div>Theme <Switch checked={theme === 'light'} onChange={changeTheme}/></div>
            </div>
        </header>
    );
};

export default Header;
