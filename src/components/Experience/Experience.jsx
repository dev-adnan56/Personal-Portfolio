import React from 'react'
import Svgs from '../../assets/Companies/Svgs'
import dev_cause from '../../assets/Companies/devcause.svg'
import dextersol from '../../assets/Companies/dextersol.png'
import hashedsystem from '../../assets/Companies/hashedsystem.svg'



const Experience = () => {

    const work_experience = [
        {
            start: "01/01/2022",
            end: "25/03/2022",
            name: "DevCause",
            logo: dev_cause,
            position: "React JS Intern",
            web_url: "https://devcause.com/"
        },
        {
            start: "25/03/2022",
            end: "05/04/2022",
            name: "DextersSol",
            position: "Associate React JS Developer",
            logo: dextersol,
            web_url: "https://dextersol.com/"
        },
        {
            start: "06/04/2022",
            end: "Current",
            name: "HashedSystem",
            position: "Associate React JS Developer",
            logo: hashedsystem,
            web_url: "https://hashedsystem.com/"
        }
    ]


    return (
        <>
            <div className="projects flex-col" id="experience">
                <div className="about-txt" style={{ margin: '20px 0' }}>My Work Experience</div>
                {work_experience?.map(item => {
                    return (
                        <a
                            href={item?.web_url}
                            target="_blank"
                            className="grid grid-cols-1 sm:grid-cols-2 bg-[#ffffff18] hover:bg-[#ffffff10] my-5 gap-y-4 sm:gap-y-0 py-5 rounded-xl px-5">
                            {/* <p className='text-base md:text-lg break-words text-center'>{item?.start} - {item?.end}</p> */}

                            {/* <div className='w-24 sm:w-32 md:w-[150px]'> */}
                            <p className='text-lg break-words flex items-center text-center sm:text-left mx-auto sm:mx-0'>{item?.position} </p>

                            <div className='flex items-center justify-center sm:justify-end'>

                                <div className=" border-[#DBDBDB] rounded-md cursor-pointer transition-all max-w-[200px] md:max-w-[250px]">
                                    <img src={item?.logo} alt={item?.name} srcset={item?.logo} className="object-cover resize" />
                                    {/* {item?.name == "DevCause" && <Svgs.dev_cause />}
                                {item?.name == "DextersSol" && <Svgs.dexterSol />}
                            {item?.name == "HashedSystem" && <Svgs.hashedsystem />} */}
                                </div>
                            </div>
                        </a>
                    )
                })}



            </div>
        </>
    )
}

export default Experience