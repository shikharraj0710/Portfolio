import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function SkillsSlider({ data }) {

  return (
    <>
      <div className=" w-full relative border-2 border-[#eba352] rounded-xl">
        <div className="uppercase text-md bg-darkGolden text-white tracking-wider rounded-lg  font-heading inline-flex px-4 py-2 font-bold absolute z-10 md:left-[35%] bottom-[90%] text-sm">
          skills
        </div>
        <div className="flex rounded-lg h-full bg-gray-100  px-4 py-16 flex-col">
          <a href="/admin/skillOperations">
            <BorderColorIcon className="absolute md:right-3 md:top-3 hover:scale-125 focus:scale-125 cursor-pointer hover:text-black transition-all" titleAccess="Modify?" />
          </a>
          <Splide
            aria-label="Banner Information"
            options={{
              type: "loop",
              autoplay: true,
              interval: 2000,
              easing: "ease",
              drag: true,
            }}
          >
            {data?.data?.map((d, index) => {
              return (
                <SplideSlide key={index}>
                  <section className="flex flex-col justify-center items-center">
                    <div className="text-lg tracking-wider font-bold md:text-lg text-gray-600 text-bold font-mono">
                      {d?.skill}
                    </div>
                    <div className="text-sm">
                      <p><input type="range" value={d?.progress * 10} className="accent-[#eba352] outline-none border-none" /></p>
                      {/* <p>{d?.progress} </p> */}
                    </div>
                  </section>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </>
  );
}
