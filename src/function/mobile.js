import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Ganti dengan ukuran layar yang dianggap sebagai mobile

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Cek ukuran layar saat ini pada awal render

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isMobile;
}
