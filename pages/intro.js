import React from "react";
import Slider from "../components/Slider";


export default function intro({ data, length}) {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <div className="font-heading text-md md:text-lg lg:text-4xl text-black uppercase flex justify-center my-10 ">
              Intoduction
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 sm:gap-8 gap-12 justify-center items-center">
          <Slider heading="Education" data={data}/>
          <Slider heading="Experience" />
          <Slider  heading="skills"/>
          </div>
    
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params, req }) {
    const res = await fetch(`http://localhost:3000/api/education/`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      const data = await res.json();
      if (!data) {
        return {
          notFound: true,
        };
      }
    console.log(data)
      return {
        props: {
          data: data.data,
          length: data.length ?? 0,
        },
      };
  }