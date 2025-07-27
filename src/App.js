import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Induction from "./pages/Induction";
import Blogs from "./pages/Blogs";
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
        <Route path="/tab" element={<TAB />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
