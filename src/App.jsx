import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import 'swiper/css/bundle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ProjectsList from './components/Projects/ProjectsList';
import { Link as Scroll } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa';

function App() {
  window.addEventListener("scroll", function (e) {
    const element = document.getElementById('section_about').offsetTop
    const toTop = document.querySelector(".top-btn");
    var bodyScroll = window.scrollY;

    if (bodyScroll > element) {
      toTop.classList.remove("-right-10");
      toTop.classList.add("right-4");
    } else {
      toTop.classList.remove("right-4");
      toTop.classList.add("-right-10");
    }
  });


  return (
    <>

      <div className="relative overflow-x-hidden w-full" id='top'>
        <NavBar />

        <div className="main-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<ProjectsList />} />
          </Routes>

          <Scroll to='top' spy={true} smooth={true} duration={500} className="top-btn btn-gradient fixed !rounded-lg !p-1 right-4 bottom-16 z-20 transition title my-3 mx-auto">
            <FaArrowUp style={{ fill: "#041f31f5", width: '1.5rem', height: '1.5rem' }} />
          </Scroll>
        </div>
        <Footer />

      </div>

    </>
  )
}

export default App
