export default function MainInfo(props){
    return (
        <>
            <div className='text-primary md:text-[70px] text-[40px] font-druk mt-[30vh] sm:mt-[37vh] relative -z-50 mb-[35vh]'>
                <h1 className='relative'>Fullstack</h1>
                <p className='relative md:-top-9 -top-4'>web dev.</p>
                {props.isMobile ? <p className='text-base text-slate-200 font-sans '>Highly skilled at progressive enhancement, design systems & UI Engineering</p> : ''}
            </div>
            <div className='sm:flex block mb-20'>
                <div className='text-violet-500 mb-10'>
                <h2 className='text-2xl mb-5 sm:text-4xl font-druk'>Design</h2>
                <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
                </div>
                <div className='text-violet-500 sm:mt-36 '>
                <h2 className='text-2xl mb-5 sm:text-4xl font-druk'>Enginering</h2>
                <p>In building PHP and JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
                </div>
            </div>
        </>
    )
}