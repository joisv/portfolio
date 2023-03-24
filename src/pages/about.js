import Image from "next/image"
import { useState } from "react";
import Skills from "@/components/skills"
import { motion as m } from "framer-motion";
export default function About(){
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };
    return (
        <>
            <div className="w-full h-fit -z-50">
                <div className="relative top-40 h-[60vh] mb-52 ">
                    <div className="absolute px-8 z-20 right-1 -top-6">
                        <h1 className="text-end font-druk text-3xl sm:text-5xl text--500">MagiC<span className="block">aster</span><span className="block">STUDIO</span></h1>
                    </div>
                    <m.div initial={{ x: "100%" }} animate={{ x: 0 }} transition={{ duration: 0.5, ease: "easeIn" }} className="relative h-full">
                        <Image 
                            src="/img/hero.jpg"
                            fill
                            priority
                            alt="hero"
                            sizes="100vw"
                            className={`object-cover skew-y-6${
                                isImageLoaded ? "" : "translate-x-full"
                            }`}
                            onLoad={handleImageLoad}
                        />
                    </m.div>
                </div>
                <div className="block md:grid md:grid-cols-2 md:gap-3">
                    <div className="px-8 text-violet-500 mb-10">
                        <h1 className="font-bold text-3xl mb-5 sm:text-4xl font-druk">Expertise</h1>
                        <Skills />
                    </div>
                    <div className="px-8 text-violet-500 sm:mt-36">
                        <h1 className="font-bold text-3xl mb-5 sm:text-4xl font-druk">Experience</h1>
                        <p>I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.
                        Currently, I work at Shopify as a Senior UX Developer and Accessibility advocate crafting thoughtful and inclusive experiences that adhere to web standards for over a million merchants across the world.</p>
                    </div>
                </div>
            </div>
        </>
    )
}