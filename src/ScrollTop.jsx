import React, { useEffect, useState } from 'react'



const ScrollTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 2000);
    };
    window.addEventListener('scroll', handleScroll);


    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

   }, []);

   const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
   };




  return (

    <button className={`scroll-to-top ${isVisible ? 'visible' : ''} bg-white w-12 h-12 rounded-[8px] shadow-lg`} onClick= {scrollToTop}>
        <h1 className='text-black noto coal'>TOP</h1>
    </button>
  );
};

export default ScrollTop