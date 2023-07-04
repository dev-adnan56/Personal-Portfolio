import React from 'react'
import Slider from "react-slick";
import './Skills.css'
import JavaScript from '../../assets/JavaScript.png'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import TailwindCSS from '../../assets/TailwindCSS.png'
import MaterialUI from '../../assets/MaterialUI.png'
import React_BootStrap from '../../assets/React_BootStrap.svg'
import ReactJs from '../../assets/ReactJs.png'
import BootStrap from '../../assets/BootStrap.png'
import NodeJs from '../../assets/NodeJs.png'
import MongoDB from '../../assets/MongoDB.png'
import Express from '../../assets/Express.png'
import Git from '../../assets/Git.png'
import Redux from '../../assets/Redux.png'

const skillsData = [
    {
        'title': 'JavaScript',
        'image': JavaScript
    },
    {
        'title': 'HTML',
        'image': HTML
    },
    {
        'title': 'CSS',
        'image': CSS
    },
    {
        'title': 'Tailwind CSS',
        'image': TailwindCSS
    },
    {
        'title': 'BootStrap',
        'image': BootStrap
    },
    {
        'title': 'React BootStrap',
        'image': React_BootStrap
    },
    {
        'title': 'Material UI',
        'image': MaterialUI
    },
    {
        'title': 'React Js',
        'image': ReactJs
    },
    {
        'title': 'Redux',
        'image': Redux
    },
    {
        'title': 'Node Js',
        'image': NodeJs
    },
    {
        'title': 'MongoDB',
        'image': MongoDB
    },
    {
        'title': 'Express',
        'image': Express
    },
    {
        'title': 'Git',
        'image': Git
    },
]
const Skills = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]

    };

    return (
        <>
            <div className="about my-8 mx-auto">
                <div className="about-txt">Skills</div>
                <Slider {...settings}>
                    {skillsData.map((item, index) => {
                        return (
                            <div className="skills" key={index}>
                                <div className="img-box">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="skills-txt">{item.title} </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Skills
