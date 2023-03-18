import Head from 'next/head'
import MainInfo from '@/components/maininfo'
import useIsMobile from '@/function/mobile'

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
        <div className='w-full h-fit flex flex-wrap md:justify-end justify-center px-10 sm:px-14 pb-5'>
          <MainInfo isMobile={isMobile}/>
        </div>
      </main>
    </>
  )
}
