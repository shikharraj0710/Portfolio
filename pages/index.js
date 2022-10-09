import React, { useState } from "react";
import Home from "../components/Home";
import Career from "../components/career";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal"
import Head from "next/head";
import { server } from "../config/index.js";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";

export default function Index({ data }) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  console.log(router.asPath)

  return (
    <>
    <Head><title>Home</title></Head>
     <Modal  show={show} setShow={setShow}/>
     <Home />
      <Career data={data} />
      <ContactForm />
    </>
  );
}

export async function getServerSideProps({ req }) {
  
  const { origin } = absoluteUrl(req, req.headers.host);
  console.log('Requested URL ->',origin); 
  // (or) other way
  const host = absoluteUrl(req, req.headers.host);
  console.log('Requested URL ->',host.origin); 


  const res = await fetch(`${server}/api/skill`, {
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
    },
  };
}
