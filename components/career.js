import React from 'react'

export default function Career() {
    const data = ["html5/css", "bootstrap", "tailwind", "javascript", "reactjs", "nextjs", "mongodb", "nodejs", "ejs", "express js"]
    return (
        <div className="w-[80%] mx-auto flex px-5 py-10 md:py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0">
                <div className='text-3xl md:text-5xl font-heading capitalize text-customBlack mb-3 md:mb-5 text-center md:text-left'>my career so far</div>
                <div className='text-lg font-content text-darkGrey text-justify'>Always up for a challenge, I have worked for lean start-ups and was a member of the first New Zealand start-up to attend Y Combinator, the largest start-up accelerator in the world. From there, I worked my way up to Art Director and Team Lead at Appster where I oversaw the design of 30+ mobile and desktop apps. Currently, I lead UI/UX design at SaaS start-up VideoMyJob.
                </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-wrap  gap-3 justify-left md:justify-center w-[80%] ">
                {data.map((d, i) => (
                    <button className=' border-2 border-solid border-darkGolden rounded-md px-3 py-2 uppercase text-customBlack tracking-wider font-medium  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] ' key={i}>
                        {d}
                    </button>
                ))}
            </div>
        </div>

    )
}
