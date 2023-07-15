import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

function LinkComponentToIntroPage() {
    return <Link href="/intro" ><span title='Read More' className=' text-slate-700 hover:text-slate-500 transition-all hover:cursor-pointer focus-visible:text-slate-500 focus-visible:cursor-pointer'><CallMissedOutgoingIcon fontSize='small' /></span></Link>
}

export default function Career({ data }) {
    const { ref, inView } = useInView({
        threshold: 0.4
    });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: { type: "tween", duration: 1, bounce: 2, }
            })
        } else {
            animation.start({ opacity: 0 })
        }
    }, [inView]);

    console.log(data)

    return (
        <div ref={ref}>
            <motion.div animate={animation} className="w-[95%] lg:w-[80%] mx-auto flex px-5 py-10 md:py-16 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
                    <div className='text-3xl md:text-5xl font-heading capitalize text-customBlack mb-3 md:mb-5 text-center md:text-left'>my career so far</div>
                    <div className='text-md font-content text-darkGrey text-justify'>
                        I am currently working for <b>O-LINE-O INDIA Pvt. Ltd.</b> as a Full Stack Web Developer and gained emmense industry knowledge excelling my skills. I have been a part of multiple Projects co-ordaniting and handling various Client requirements.
                        <br />
                        <div><span className='underline text-slate-700 '>Education:</span> <LinkComponentToIntroPage /></div>
                        Completed <b>Bachelor of Science in Information Technology (BScIT)</b> from Kolhan University securing 87%.
                        <br />
                        <ol className='my-2'>
                            <span className='underline text-slate-700 '>Past Experiences:<LinkComponentToIntroPage /> </span>
                            <li className='text-md'>
                                <b>Frontend Web Developer Intern</b> at <i>Dirums Collective Private Limited</i>
                            </li>
                            <li className='text-md'>
                                <b>Frontend Developer</b> at <i>Netmore Technology</i>
                            </li>
                        </ol>
                        <ol>
                            <span className='underline text-slate-700 '>Trainings:<LinkComponentToIntroPage /> </span>
                            <li className='text-md'>
                                <b>PHP Web Development</b> from <i>Adityapur Auto Cluster (onsite)</i>
                            </li>
                            <li className='text-md'>
                                <b>Full Stack Development</b> from <i>Udemy (online)</i>
                            </li>
                        </ol>

                    </div>
                </div>
             {data?.data && <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-wrap  gap-3 justify-left md:justify-center w-[80%] ">
                    {data.data.sort((a, b) => b.progress - a.progress).map(d => (
                        <button className=' border-2 border-solid border-darkGolden rounded-md px-3 py-2 uppercase text-customBlack tracking-wider font-medium transition-all focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] relative' key={d?._id}>
                            <span className='absolute inset-0 rounded-sm h-full bg-darkGolden -z-10 animate-progress' style={{ width: `${Number(d?.progress) * 10}%`, }}></span>
                            <span className='text-xs md:text-sm'>{d.skill}</span>
                        </button>
                    ))}
                </div>}
            </motion.div>
        </div>

    )
}

