import React from 'react';
import Navbar from './components/Navbar';
import FullScreenSlider from './components/FullScreenSlider';
import OverlaySections from  './components/OverlaySections';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <FullScreenSlider />
        <OverlaySections />
      </div>
    </>
  );
}

export default App;
