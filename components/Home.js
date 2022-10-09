import React from 'react'

export default function Home() {
	return (
			<div className="w-[90%] md:w-[80%] mx-auto flex px-5 py-10 md:py-16 md:flex-row flex-col items-center">
				<div className="lg:max-w-lg lg:w-full md:w-1/2  mb-10 md:mb-0 drop-shadow-lg ">
					<img src="/images/image.jpg" width="500" height="400" alt="My Photo" className='rounded-lg brightness-125 shadow-md md:shadow-lg shadow-[#eba352]'/>
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24  flex flex-col md:items-start  items-center w-[80%]">
					<div className="title-font text-5xl md:text-7xl mb-4  font-heading text-customBlack">
						Hi there!
					</div>
					<p className="mb-8 text-lg font-content text-darkGrey leading-relaxed w-full text-justify ">Fuelled by a passion for developing compelling Web Applications, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below. 
					</p>
				</div>
			</div>

	)
}
