import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useMemo, useState, useRef } from "react";
import MainProject from "../components/MainProject";
import Sidebar from "../components/Sidebar";
import { server } from "../config/index";

export default function Projects({ data, length }) {
  const [headings, setHeadings] = useState([]);
  const [idShown, setIdShown] = useState(1);
  const [items, setItems] = useState([data?.data[0]]);
  const myRef = useRef();

  useMemo(() => {
    length > 0 &&
      setHeadings(() => {
        let ar = data?.data.map((d) => {
          let obj1 = {
            title: d.title,
            index: d.index,
          };
          return obj1;
        });
        return ar;
      });
  }, [data]);

  const handleSideBarClick = (e) => {
    setIdShown(e.target.dataset.id);
    e.target.parentElement
      .querySelectorAll("button")
      .forEach(
        (ele) => (
          ele.classList.remove("bg-[#1e1e1e]"),
          ele.classList.add("bg-darkGolden")
        )
      );
    e.target.classList.contains("bg-darkGolden")
      ? (e.target.classList.remove("bg-darkGolden"),
        e.target.classList.add("bg-[#1e1e1e]"))
      : (e.target.classList.add("bg-darkGolden"),
        e.target.classList.remove("bg-[#1e1e1e]"));
  };
  useEffect(() => {
    setItems(() => {
      let ar = data?.data.filter((d) => {
        if (d.index.toString() === idShown.toString()) return d;
      });
      return ar;
    });
  }, [idShown]);

  useEffect(() => {
    if (length > 0) {
      document
        .querySelectorAll("#project-btns > button")[0]
        .classList.remove("bg-darkGolden");
      document
        .querySelectorAll("#project-btns > button")[0]
        .classList.add("bg-[#1e1e1e]");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="font-heading text-md md:text-lg lg:text-3xl text-black uppercase flex justify-center my-10 font-medium">
          Projects
        </div>
      <div className="w-[95%] lg:w-[70%] mx-auto min-h-[75vh]">
        {length > 0 ? (
          <div className="border-2 border-[#EBA352] bg-gray-200 shadow-sm shadow-yellow-500 rounded-md md:px-5 py-6 my-8 md:my-16 grid md:grid-cols-4">
            <div className="md:col-span-3 bg-gray-100 px-4 py-2 rounded-md">
              <MainProject data={items[0]} ref={myRef} />
            </div>
            <div
              className="md:col-span-1 bg-darkGolden divide-y rounded-md shadow"
              id="project-btns"
            >
              <Sidebar headings={headings} handleClick={handleSideBarClick} />
            </div>
          </div>
        ) : (
          <div className="border border-darkGolden rounded-md font-heading shadow-md h-[60vh] lg:h-[80vh]  w-full bg-slate-200 text-gray-600 capitalize font-bold text-2xl text-center flex flex-col justify-center items-center">
            No projects added
            <button>
              <Link href="/admin/projectOperation">
                <a className="text-sm border-2 border-solid border-darkGolden rounded-md px-3 py-1 uppercase text-customBlack tracking-wider group  focus:outline-none  hover:text-customBlack hover:font-medium hover:bg-[#eba352] transition-all duration-200 w-full ">
                  ADD PROJECT{" "}
                  <i className="fas fa-external-link-square-alt text-darkGolden group-hover:text-black"></i>
                </a>
              </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      length: data?.data.length ?? 0,
    },
  };
}
