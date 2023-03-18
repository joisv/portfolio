import { useState } from 'react';
import Link from 'next/link';
import useIsMobile from '@/function/mobile';
import Scroll from '@/function/scroll';
import NavDesk from '@/components/navdesk';
import NavMobileButton from '@/components/navmobile';
import MobileNav from '@/components/mobilenav';

export default function Header(){
    const isMobile = useIsMobile()
    const isScrolled = Scroll()
    const [value, setValue] = useState(false);
   
    const handleClick = () => {
        console.log('halo dunia');
        setValue(!value);
    };
    
    return (
        <>
        <header>
            <nav>
                <div className='h-screen fixed z-50'>
                    <div className={`absolute w-screen md:bottom-3 p-7 md:px-14 pt-5 ease-out duration-700 ${!isMobile && isScrolled ? 'md:-translate-y-[50vh] sm:-translate-y-[35vh]' : ''}`}>
                    <div className='items-center justify-between cursor-pointer flex md:text-[40px] font-druk text-slate-200 text-[25px] ease-out duration-500'>
                        <Link href="/">
                            <div className='flex flex-col font-shadow'>
                                <span>MagiC</span>
                                <span className='relative md:-top-7 -top-[15px]'>aster</span>
                                <span className='relative md:-top-14 -top-7'>Co.</span>
                            </div>
                        </Link>
                        {isMobile ? <NavMobileButton onClick={handleClick}/> : ''}
                    </div>
                    {!isMobile ? <NavDesk isMobile={isMobile} isScrolled={isScrolled}/> : ''}
                    </div>
                    {isMobile && value ? <MobileNav onClick={handleClick}/> : ''}
                </div>
            </nav>
        </header>
        </>
    )
}