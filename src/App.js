import React from 'react';
import Navbar from './components/Navbar';
import FullScreenSlider from './components/FullScreenSlider';
import OverlaySections from  './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <FullScreenSlider />
        <OverlaySections />
        <Footer />
      </div>
    </>
  );
}

export default App;
