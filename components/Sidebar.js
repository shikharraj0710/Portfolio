import React from 'react'

export default function Sidebar({ headings, handleClick }) {
 
  return (
    <>
    {headings.map((heading, i) => (
        <button key={i} data-id={heading.index} onClick={handleClick} className='w-full rounded-md tracking-widest  bg-darkGolden text-white md:font-extrabold md:px-4 text-center uppercase font-heading py-2 hover:bg-[#1e1e1e]  transition-all duration-300 font-medium text-[10px] md:text-sm'>{heading.title}</button>
    ))}
    </>
  )
}
