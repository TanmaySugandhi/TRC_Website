import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Induction from "./pages/Induction";
import Blogs from "./pages/Blogs";
import Robotics from "./pages/Robotics";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Achievement from "./pages/Achievement";
import Contact from "./pages/ContactUs";
import Post from "./pages/Post";
import TAB from "./pages/TAB";
import Induction24 from "./pages/ind24";
import Induction23 from "./pages/ind23";
import Induction22 from "./pages/ind22";
import Induction20 from "./pages/ind20";
import Post23 from "./pages/post23";
import Post22 from "./pages/post22";
import Post21 from "./pages/post21";
import Post19 from "./pages/post19";
import ROS1 from "./pages/ROS1";
import ROS2 from "./pages/ROS2";
import Embedded1 from "./pages/Embedded1";
import Embedded2 from "./pages/Embedded2";
import Embedded3 from "./pages/Embedded3";
import IOT1 from "./pages/IOT1";
import IOT2 from "./pages/IOT2";
import IOT3 from "./pages/IOT3";
import IOT4 from "./pages/IOT4";
import IOT5 from "./pages/IOT5";
import DL1 from "./pages/DL1";
import DL2 from "./pages/DL2";
import IP1 from "./pages/IP1";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/induction" element={<Induction />} />
        <Route path="/induction/2024" element={<Induction24 />} />
        <Route path="/induction/2023" element={<Induction23 />} />
        <Route path="/induction/2022" element={<Induction22 />} />
        <Route path="/induction/2020" element={<Induction20 />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/2023" element={<Post23 />} />
        <Route path="/post/2022" element={<Post22 />} />
        <Route path="/post/2021" element={<Post21 />} />
        <Route path="/post/2019" element={<Post19 />} />
        <Route path="/tab" element={<TAB />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/blogs/ROS1" element={<ROS1 />} />
        <Route path="/blogs/ROS2" element={<ROS2 />} />
        <Route path="/blogs/Embedded1" element={<Embedded1 />} />
        <Route path="/blogs/Embedded2" element={<Embedded2 />} />
        <Route path="/blogs/Embedded3" element={<Embedded3 />} />
        <Route path="/blogs/IOT1" element={<IOT1 />} />
        <Route path="/blogs/IOT2" element={<IOT2 />} />
        <Route path="/blogs/IOT3" element={<IOT3 />} />
        <Route path="/blogs/IOT4" element={<IOT4 />} />
        <Route path="/blogs/IOT5" element={<IOT5 />} />
        <Route path="/blogs/DL1" element={<DL1 />} />
        <Route path="/blogs/DL2" element={<DL2 />} />
        <Route path="/blogs/IP1" element={<IP1 />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
