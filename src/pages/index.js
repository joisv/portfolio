import Head from 'next/head'
import useIsMobile from '@/function/mobile'
import Link from 'next/link'
import { motion as m } from 'framer-motion'

export default function Home() {
  const isMobile = useIsMobile()
 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='w-full min-h-screen flex gap-2 justify-between px-10 sm:px-14 pb-5'>
          <div className="">
                {/* <div className='text-primary md:text-[70px] text-[40px] font-druk mt-[30vh] sm:mt-[30vh] relative -z-50 mb-[35vh] bg-yellow-400'>
                    <h1 className='relative'>Fullstack</h1>
                    <p className='relative md:-top-9 -top-4'>web dev.</p>
                    {isMobile ? <p className='text-base text-slate-200 font-sans '>Highly skilled at progressive enhancement, design systems & UI Engineering</p> : ''}
                </div> */}
            </div>
            <div className="h-[110vh] w-[80vw]">
              <Link href="/about">
                <div className="door sm:top-20 top-32 sm:h-[200px] h-[135px]">
                    <div className="door-content text-primary mb-32 cursor-pointer">
                        <div className='overflow-hidden'>
                          <m.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }} className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-druk font-semibold text-end ">FULLSTACK WEB DEVELOPER</m.h1>
                        </div>
                        <div className='overflow-hidden'>
                          <m.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.8 }} className="sm:text-xl text-lg font-druk font-semibold text-end text-slate-500">Highly skilled at progressive enhancement, design systems & UI Engineering</m.h1>
                        </div>
                    </div>
                </div>
              </Link>   
            </div>
        </div>
      </main>
    </>
  )
}
