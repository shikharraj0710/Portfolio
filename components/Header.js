import React from 'react'
import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <>
      <div className='bg-customBlack  py-3 font-heading'>
        <div className='flex space-x-4 items-center justify-around flex-col md:flex-row'>
          <div className='flex space-x-1 items-center'>  
            <Link href="/"><a><Image src='/images/logo.png' width={70} height={75} /></a></Link>
            <div className='text-[#E3B671] uppercase w-30 flex flex-col justify-center'>
              <div className='mb-0 tracking-widest text-2xl mr-[-5px] '>
                Shikhar Raj </div>
              <div className='text-[15px] text-right h-full mt-[-7px] w-full tracking-wider'>Mishra</div>
            </div>
          </div>
          
        </div>
      </div>

      <div className='bg-darkGolden sticky top-0 z-10 text-[12px] flex  md:flex justify-around  w-full text-pureWhite font-content uppercase font-semibold  py-3 tracking-widest  lg:text-md'>
        <Link href="/" ><a   className='hover:underline hover:scale-110 transition duration-100'>home</a></Link>
        <Link href="/intro"><a className='hover:underline hover:scale-110 transition duration-100'>Intro</a></Link>
       <Link href="/projects"><a  className='hover:underline hover:scale-110 transition duration-100'>Projects</a></Link>
       <Link href="/contact"><a  className='hover:underline hover:scale-110 transition duration-100'>contact</a></Link>

      </div>

    </>
  )
}
