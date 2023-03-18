import { useEffect, useState } from "react";
export default function Scroll (){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
       
        function handleScroll() {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        }
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
   return isScrolled
}