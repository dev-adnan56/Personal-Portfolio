import React from 'react'
import Svgs from '../../assets/Companies/Svgs'

const Experience = () => {

    const work_experience = [
        {
            start: "01/01/2022",
            end: "25/03/2022",
            name: "DevCause",
            logo: <Svgs.dev_cause />,
            position: "React JS Intern",
            web_url: "https://devcause.com/"
        },
        {
            start: "25/03/2022",
            end: "05/04/2022",
            name: "DextersSol",
            position: "Associate React JS Developer",
            logo: <Svgs.dexterSol />,
            web_url: "https://dextersol.com/"
        },
        {
            start: "06/04/2022",
            end: "Current",
            name: "HashedSystem",
            position: "Associate React JS Developer",
            logo: <Svgs.hashedsystem />,
            web_url: "https://hashedsystem.com/"
        }
    ]


    return (
        <>
            <div className="projects flex-col" id="projects">
                <div className="about-txt" style={{ margin: '20px 0' }}>My Work Experience</div>
                {work_experience?.map(item => {
                    return (
                        <a
                            href={item?.web_url}
                            target="_blank"
                            className="flex bg-[#ffffff18] hover:bg-[#ffffff10] my-5 gap-y-4 sm:gap-y-0 py-5 flex-col-reverse sm:flex-row rounded-xl justify-between px-5">
                            {/* <p className='text-base md:text-lg break-words text-center'>{item?.start} - {item?.end}</p> */}

                            {/* <div className='w-24 sm:w-32 md:w-[150px]'> */}
                            <div className=" border-[#DBDBDB] rounded-md flex items-center justify-center cursor-pointer transition-all">
                                {item?.name == "DevCause" && <Svgs.dev_cause />}
                                {item?.name == "DextersSol" && <Svgs.dexterSol />}
                                {item?.name == "HashedSystem" && <Svgs.hashedsystem />}
                            </div>
                            <p className='text-lg break-words flex text-center items-center mx-auto'>{item?.position} </p>
                        </a>
                    )
                })}



            </div>
        </>
    )
}

export default Experience