import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import "@splidejs/react-splide/css";
import Link from "next/link";

export default function EducationSlider({ data }) {

  return (
    <>
      <div className=" w-full relative border-2 border-[#eba352] rounded-xl">
        <div className="uppercase text-md bg-darkGolden text-white tracking-wider rounded-lg  font-heading inline-flex px-4 py-2 font-bold absolute z-10 md:left-[33%] text-sm bottom-[90%]">
          education
        </div>
        <div className="flex rounded-lg h-full bg-gray-100  px-4 py-16 flex-col">
        <Link href="/admin/educationOperation">
          <a>
            <BorderColorIcon className="absolute transition-all md:right-3 md:top-3 hover:scale-125 focus:scale-125 cursor-pointer hover:text-black " titleAccess="Modify?" />
          </a>
          </Link>
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
                    <div className="text-md md:text-lg text-gray-600 text-bold font-mono text-center font-bold">
                      {d?.course}
                    </div>
                    <div className="text-sm text-center">
                      <p>{d?.college} </p>
                      <p>{d?.percentage}</p>
                      <p>{d?.session}</p>
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
