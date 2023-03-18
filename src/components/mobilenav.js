import Link from "next/link"
export default function MobileNav(props){
    
    return (
        <>
            <div className='h-[85vh] w-screen bg-violet-900 relative bg-opacity-80 mt-[15vh] ease-in-out duration-500 p-5'>
                <div className='text-slate-200 z-50 mb-8'>
                    <div className='font-semibold ease-out duration-700 mb-3'>
                        <span >Studio of MagiCaster Co <br></br>
                            FullStack Web Developer</span>
                    </div>
                    <div className='ease-out duration-700'>
                        <p className='font-semibold'>Indonesia East Java</p>
                        <p>magicaster@hotmail.com</p>
                    </div>
                </div>
                <div className='text-slate-200 font-semibold'>
                    <ul>
                        <li className='mb-5' onClick={props.onClick}>
                            <Link href="/about">
                                1/ about
                            </Link>
                        </li>
                        <li className='mb-5'>
                            2/ skill
                        </li>
                        <li className='mb-5'>
                            <a href="https://github.com/joisv">3/ github</a>
                        </li>
                        <li className='mb-5'>
                            4/ instagram
                        </li>
                        <li className='mb-5'>
                            4/ linkedin
                        </li>
                    </ul>
                </div>
                <div className="text-slate-200 absolute right-5 bottom-5">
                    <h1 className="font-bold ">design</h1>
                    <h1>joisV.</h1>
                </div>
            </div>
        </>
    )
}