import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import 'swiper/css/bundle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import ProjectsList from './components/Projects/ProjectsList';
function App() {
  return (
    <>
      <div className="relative overflow-x-hidden">

        <NavBar />
        <div className="main-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<ProjectsList />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
