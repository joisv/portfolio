import Link from "next/link"
export default function NavDesk(props){
    return (
        <>
            <div className='md:grid md:grid-cols-2 w-full items-center text-slate-200 text-sm hidden'>
                        <div className='flex gap-14'>
                        <div className={`font-semibold ease-out duration-700 ${!props.isMobile && props.isScrolled ? 'opacity-0' : ''}`}>
                            <span >Studio of MagiCaster Co <br></br>
                                FullStack Web Developer</span>
                        </div>
                        <div className={`ease-out duration-700 ${!props.isMobile && props.isScrolled ? 'opacity-0' : ''}`}>
                            <p className='font-semibold'>Indonesia East Java</p>
                            <p>magicaster@hotmail.com</p>
                        </div>
                        {/* nav */}
                        <div className={`font-semibold ease-out duration-700 ${!props.isMobile && props.isScrolled ? '-translate-y-[25vh]' : ''}`}>
                            <ul>
                            <Link href="/about">1/ about</Link>
                            <li><a>2/ skill</a></li>
                            </ul>
                        </div>
                        </div>
                        {/* nav2 */}
                        <div className={`flex justify-between ml-[50%] items-center ease-out duration-700 ${!props.isMobile && props.isScrolled ? 'opacity-0' : ''}`}>
                            <div className='font-semibold'>
                                <ul>
                                <li><a href="https://github.com/joisv">3/ github</a></li>
                                <li><a>4/ instagram</a></li>
                                <li><a>5/ linkedin</a></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="font-bold">design</h1>
                                <h1>joisV</h1>
                            </div>
                        </div>
                    </div>
        </>
    )
}