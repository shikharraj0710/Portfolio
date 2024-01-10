import React from "react";

export default function MainProject({ data }) {
  return (
    <div
      className="w-full h-full py-8 md:px-5 lg:px-15   text-content text-black tracking-wider flex flex-col justify-center items-left"
      id="main-project"
    >
      <div className="text-xl text-heading font-extrabold">{data.title}</div>
      <div className="text-xs mb-3 font-medium">{new Date(data.duration).toLocaleDateString('en-ES', { day: "numeric", weekday: "long", year: "numeric", month: "long" })}</div>
      <ul className="text-sm md:text-md list-disc marker:text-darkGolden capitalize list-inside mb-3">
        {data?.desc[0].split(".")?.filter(item => item !== "")?.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div>
        <div className="uppercase text-sm tracking-wider mb-2 md:mb-5  font-bold">
          tech used
        </div>
        <div className=" flex gap-2 flex-wrap md:gap-4  items-center">
          {data?.skill.map((tech, i) => (
            <button
              className=" text-white bg-darkGolden shadow-md rounded-md px-6 py-1 uppercase text-xs md:text-sm hover:bg-gray-400 transition-colors cursor-pointer"
              key={i}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2  md:mt-8 mt-5 justify-between">
        {data?.github != "" && (
          <button>
            <a
              href={data?.github}
              className="text-sm border-2 border-solid border-darkGolden rounded-md px-3 py-1 uppercase text-customBlack tracking-wider group  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] transition-all duration-200 w-full "
              target="_blank"
            >
              github{" "}
              <i className="fas fa-external-link-square-alt text-darkGolden group-hover:text-black"></i>
            </a>
          </button>
        )}
        {data?.visit != "" && (
          <button>
            <a
              href={data?.visit}
              className="text-sm border-2 border-solid border-darkGolden rounded-md px-3 py-1 uppercase text-customBlack tracking-wider group  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] "
              target="_blank"
            >
              visit{" "}
              <i className="fas fa-external-link-square-alt text-darkGolden group-hover:text-black "></i>
            </a>
          </button>
        )}
      </div>
    </div>
  );
}
