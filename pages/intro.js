import React from "react";
import EducationSlider from "../components/EducationSlider";
import SkillsSlider from "../components/SkillsSlider";
import ExperienceSlider from "../components/ExperienceSlider";
import Head from "next/head";
import { server } from "../config/index";

export default function intro({ education, skills, experience }) {

  return (
    <>
      <Head>
        <title>Inroduction</title>
      </Head>
      <section className="text-gray-600 body-font bg-gray-200 min-h-[80%] overflow-hidden">
        <div className="container px-5 pt-8 pb-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <div className="font-heading text-md md:text-lg lg:text-3xl text-black uppercase flex justify-center my-10 font-medium">
              Intoduction
            </div>
          </div>
          <div className=" grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 sm:gap-8 gap-12 justify-center items-center w-full">
            <EducationSlider data={education} />
            <SkillsSlider data={skills} />
            <ExperienceSlider data={experience} />
          </div>

        </div>
      </section>

    </>
  );
}

export async function getServerSideProps() {

  const [eduRes, skillsRes, experienceRes] = await Promise.all([
    fetch(`${server}/api/education/`),
    fetch(`${server}/api/skill/`),
    fetch(`${server}/api/experience/`)
  ]);
  const [education, skills, experience] = await Promise.all([
    eduRes.json(),
    skillsRes.json(),
    experienceRes.json()
  ]);
  if (!education || !skills || !experience) {
    return {
      notFound: true,
    };
  }

  return { props: { education, skills, experience } };

}