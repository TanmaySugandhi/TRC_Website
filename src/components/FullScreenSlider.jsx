import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Styles/FullScreenSlider.css';


const Slider = () => {
  return (
    <section className="fullscreen-slider" id="home">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        interval={4000} 
        transitionTime={800}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img src="/assets/trc1.webp" alt="Slide 1" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc2.webp" alt="Slide 2" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc3.webp" alt="Slide 3" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc4.webp" alt="Slide 4" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc5.webp" alt="Slide 5" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc6.webp" alt="Slide 6" loading="lazy" />
        </div>
        <div>
          <img src="/assets/trc7.webp" alt="Slide 7" loading="lazy" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
