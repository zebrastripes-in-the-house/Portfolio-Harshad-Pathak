import React, { useState, useEffect } from 'react';
import BentoGrid from './components/BentoGrid';
import BentoItem from './components/BentoItem';
import Loader from './components/Loader';
import Favicon from 'react-favicon';
import { Analytics } from "@vercel/analytics/react";
import './App.css';

// Import images
import img01 from './assets/01.png';
import img02 from './assets/02.png';
import img03 from './assets/03.png';
import img04 from './assets/04.png';
import img05 from './assets/05.png';
import img06 from './assets/06.png';
import img07 from './assets/07.png';
import img08 from './assets/08.png';
import img09 from './assets/09.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import img13 from './assets/13.png';
import img14 from './assets/14.png';
import img15 from './assets/15.png';
import img16 from './assets/16.png';
import img17 from './assets/17.png';
import img18 from './assets/18.png';
import img19 from './assets/19.png';
import img20 from './assets/20.png';
import img21 from './assets/21.png';
import img22 from './assets/22.png';
import img23 from './assets/23.png';
import img24 from './assets/24.png';
import img25 from './assets/25.png';
import img26 from './assets/26.png';
import img27 from './assets/27.png';
import img28 from './assets/28.png';
import favSvg from './assets/fav.svg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = [
      img01, img02, img03, img04, img05, 
      img06, img07, img08, img09, img10, 
      img11, img12, img13, img14, img15, 
      img16, img17, img18, img19, img20, 
      img16, img17, img18, img19, img20, 
      img21, img22, img23, img24, img25,
      img26, img27, img28
    ];

    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to avoid getting stuck
        });
      });

      await Promise.all(promises);
      // Add a small delay for smoother transition if loading is too fast
      setTimeout(() => setIsLoading(false), 500);
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app-container">
      <Favicon url={favSvg} />
      <Analytics />
      <BentoGrid>
        {/* 
          Bento Grid Items 
          Images 01-25 in sequence.
        */}

        {/* 01: Profile / Banner (Large) */}
        <BentoItem 
          colSpan={2} 
          rowSpan={2} 
          src={img01} 
          alt="Image 01" 
        />
        
        {/* 02: Social Links (Small squares) */}
        <BentoItem 
          colSpan={1} 
          rowSpan={1} 
          className="social-container"
        >
          <div className="social-grid">
             <a href="https://www.instagram.com/theharshadpathak/?hl=en" className="social-item" target="_blank" rel="noopener noreferrer">
                <img src={img02} alt="Instagram" />
             </a>
             <a href="https://www.behance.net/harshadpathak" className="social-item" target="_blank" rel="noopener noreferrer">
                <img src={img03} alt="Behance" />
             </a>
             <a href="https://github.com/zebrastripes-in-the-house" className="social-item" target="_blank" rel="noopener noreferrer">
                <img src={img06} alt="GitHub" />
             </a>
             <a href="https://www.linkedin.com/in/h-pathak/" className="social-item" target="_blank" rel="noopener noreferrer">
                <img src={img07} alt="LinkedIn" />
             </a>
          </div>
        </BentoItem>
        {/* 03 */}
        <BentoItem 
          colSpan={1} 
          rowSpan={1} 
          src={img28 } 
          alt="Image 28" 
          href="#"
        />
        
        {/* 04: Feature Work (Wide) */}
        <BentoItem 
          colSpan={2} 
          rowSpan={1} 
          src={img04} 
          alt="Image 04" 
        />
        
        {/* 05: Tall item */}
        <BentoItem 
          colSpan={1} 
          rowSpan={2} 
          src={img05} 
          alt="Image 05" 
        />
        
        {/* 06 */}
        <BentoItem colSpan={1} rowSpan={1} src={img26} alt="Image 26"/>
        {/* 07 */}
        <BentoItem colSpan={1} rowSpan={1} src={img10} alt="Image 10" href = "https://drive.google.com/file/d/1LhDg7yn2YDm3cDMK6GX1zDS5EotJXj4O/view?usp=sharing" />
        {/* 08 */}
        <BentoItem colSpan={2} rowSpan={2} src={img08} alt="Image 08" />
        {/* 09 */}
        <BentoItem colSpan={1} rowSpan={1} src={img09} alt="Image 09" />
        {/* 10 */}
        <BentoItem colSpan={1} rowSpan={1} src={img27} alt="Image 27"/>   
        {/* 11 */}
        <BentoItem colSpan={2} rowSpan={1} src={img11} alt="Image 11" />
        {/* 12 */}
        <BentoItem colSpan={1} rowSpan={1} src={img12} alt="Image 12" />
        {/* 13 */}
        <BentoItem colSpan={1} rowSpan={2} src={img13} alt="Image 13" />
        {/* 14 */}
        <BentoItem colSpan={1} rowSpan={1} src={img14} alt="Image 14" />
        {/* 15 */}
        <BentoItem colSpan={1} rowSpan={1} src={img15} alt="Image 15" />
        {/* 16 */}
        <BentoItem colSpan={2} rowSpan={1} src={img16} alt="Image 16" />
        {/* 17 */}
        <BentoItem colSpan={1} rowSpan={1} src={img17} alt="Image 17" />
        {/* 18 */}
        <BentoItem colSpan={1} rowSpan={1} src={img18} alt="Image 18" />
        {/* 19 */}
        <BentoItem colSpan={2} rowSpan={2} src={img19} alt="Image 19" />
        {/* 20 */}
        <BentoItem colSpan={1} rowSpan={1} src={img20} alt="Image 20" />
        {/* 21 */}
        <BentoItem colSpan={1} rowSpan={1} src={img21} alt="Image 21" />
        {/* 22 */}
        <BentoItem colSpan={2} rowSpan={1} src={img22} alt="Image 22" />
        {/* 23 */}
        <BentoItem colSpan={1} rowSpan={1} src={img23} alt="Image 23" />
        {/* 24 */}
        <BentoItem colSpan={1} rowSpan={1} src={img24} alt="Image 24" />
        {/* 25 */}
        <BentoItem colSpan={1} rowSpan={1} src={img25} alt="Image 25" />
        {/* 26 */}
        <BentoItem colSpan={1} rowSpan={1} src={img26} alt="Image 26" />
        {/* 27 */}
        <BentoItem colSpan={1} rowSpan={1} src={img27} alt="Image 27" />
        {/* 28 */}
        <BentoItem colSpan={1} rowSpan={1} src={img28} alt="Image 28" />

      </BentoGrid>
    </div>
  );
}

export default App;
