import React from 'react'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Keyboard, Autoplay, Navigation, Pagination } from "swiper";

// import required modules
import './Projects.css'
import ProjectCards from './ProjectCards';
import { Link } from 'react-router-dom';

const Projects = () => {


    return (
        <>
            <div className="projects" id="projects">
                <div className="about-txt" style={{ margin: '20px 0' }}>Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 place-items-center">
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                    <ProjectCards />
                </div>
                {/* <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                    }}
                    modules={[Keyboard, Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ProjectCards />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCards />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCards />
                    </SwiperSlide>
                </Swiper>
                <Link to="projects" className="btn-gradient" style={{ margin: '20px auto' }}>See All Products</Link> */}
            </div>
        </>
    )
}

export default Projects
