import React from 'react'
import Link from "next/link"
import Image from 'next/image'


export default function Footer() {
	return (
			<div className=" px-5 py-8 mx-auto flex items-center sm:flex-row flex-col bg-customBlack">
			<Link href="/"><a ><Image src='/images/logo.png' width={40} height={45} /></a></Link>
				<p className="text-sm sm:ml-4 text-darkGrey sm:pl-4 sm:border-l-2 sm:border-darkGrey sm:py-2 sm:mt-0 mt-4" title='LinkedIN'>
					© 2022 Copyright -----
					<Link href="https://www.linkedin.com/in/shikhar-raj-mishra-839998224"><a target="_blank" className='text-darkGolden text-md tracking-wider hover:underline hover:scale-150 font-sans'>@shikharraj</a></Link>
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start" >
				<Link href="https://github.com/shikharraj0710" >
					<a className="ml-[10px] text-darkGolden hover:scale-150 mr-[8px]" target="_blank" title='Github'>
					<i className="fab fa-github"></i>
					</a>
					</Link>
					<Link href="https://www.facebook.com/shikharraj.mishra.7/">
					<a className="text-darkGolden hover:scale-150" target="_blank" title='Facebook'>
						<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
						</svg>
					</a>
					</Link>
					<Link href="https://twitter.com/@shikharraj921">
					<a className="ml-3 text-darkGolden hover:scale-150" target="_blank" title='Twitter'>
						<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
					</Link>
					<Link href="https://www.instagram.com/shikharraj921/">
					<a className="ml-3 text-darkGolden hover:scale-150" target="_blank" title='Instagram'>
						<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
					</Link>

				</span>
			</div>
	)
}
