import React, { useRef, useState } from 'react';
import giftvideo from '../../assets/Videos/giftvideo.mp4'; // Ensure correct path
import play from '../../assets/SVG/Play.svg';
import img from '../../assets/Images/Gift.png'

function Content2() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  

  return (
    <div className='max-w-screen-2xl mx-auto px-5 md:px-16 py-14 overflow-x-hidden'>
      <div className='flex justify-between flex-col md:flex-row gap-8 md:gap-0 '>
        
        {/* Left Text Section */}
        <div data-aos="fade-right" data-aos-duration="1500" className="left font-book font-normal text-xl md:text-2xl text-center md:text-start max-w-[735px] text-[#9A9A9A] flex items-center">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisc.</h1>
        </div>

        {/* Right Video Section */}
        <div data-aos="fade-left" data-aos-duration="2000" className="right relative md:shrink-0 w-[250px] md:w-[250px] xl:w-[450px] aspect-square rounded-full overflow-hidden mx-auto md:mx-0">
          
          {/* Video Element */}
          <video 
            ref={videoRef}
            src={giftvideo} 
            className='w-full h-full object-cover' 
            loop 
            playsInline 
            poster={img}
          />

          {/* Overlay */}
          {!isPlaying && (
            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer' onClick={togglePlay}>
              <img src={play} alt="Play Button" className="w-16 md:w-20" />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Content2;
