import React, { useCallback, useRef, useState } from "react";
import Home from "../components/Home";
import Career from "../components/career";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal"
import Head from "next/head";
import { server } from "../config/index.js";


export default function Index({ data }) {
  const [show, setShow] = useState(false);
  const hireRef = useRef(null);

  const handleHireMeClick = useCallback(() => {
    hireRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [hireRef])

  return (
    <>
      <Head><title>Home</title></Head>
      <Modal show={show} setShow={setShow} />
      <Home handleHireMeClick={handleHireMeClick} />
      <Career data={data} />
      <ContactForm hireRef={hireRef} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${server}/api/skill`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      notFound: true,
    };
  }
}

