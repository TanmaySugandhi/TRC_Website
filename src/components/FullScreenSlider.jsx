import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FullScreenSlider.css';


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
          <img src="/assets/trc1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/assets/trc2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/assets/trc3.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="/assets/trc4.jpg" alt="Slide 4" />
        </div>
        <div>
          <img src="/assets/trc5.jpg" alt="Slide 5" />
        </div>
        <div>
          <img src="/assets/trc6.jpg" alt="Slide 6" />
        </div>
        <div>
          <img src="/assets/trc7.jpg" alt="Slide 7" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
