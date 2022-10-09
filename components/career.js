import React from 'react'

export default function Career({ data }) {
   
    return (
        <div className="w-[95%] lg:w-[80%] mx-auto flex px-5 py-10 md:py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
                <div className='text-3xl md:text-5xl font-heading capitalize text-customBlack mb-3 md:mb-5 text-center md:text-left'>my career so far</div>
                <div className='text-lg font-content text-darkGrey text-justify'>
                As a passionate Developer, I was elated to see an opening for a Junior Web Developer role. I have experience in ReactJs, NextJS Framework and Tailwind CSS. Combined with my recent 3-months full time internship in Front-end Web Development at Dirums Collective Private Limited, I am confident I have the skills for developing web sites with great functionalities. Through my internship, I also gained valuable teamwork and communication skills. Currently working on React Native to enhance my developing skills.
                </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-wrap  gap-3 justify-left md:justify-center w-[80%] ">
                {data?.data.map((d, i) => (
                    <button className=' border-2 border-solid border-darkGolden rounded-md px-3 py-2 uppercase text-customBlack tracking-wider font-medium  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] ' key={i}>
                        {d.skill}
                    </button>
                ))}
            </div>
        </div>

    )
}

