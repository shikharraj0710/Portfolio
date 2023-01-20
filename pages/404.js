import React from 'react'
import { useRouter } from "next/router"

export default function Error() {
    const router = useRouter()
console.log(router.asPath)
    if(router.asPath == "/intro" || router.asPath == "/projects" || router.asPath == "/contact") {
        return (
            <>
            
            <div className='text-2xl uppercase tracking-widest text-black flex justify-center items-center min-h-[400px]'> under production</div>
            
            </>
          )
    }
return (
    <>
    <div className='text-2xl text-red-700 flex justify-center items-center min-h-[400px]'>Page you are looking for does not exist</div>
    </>
)

}
