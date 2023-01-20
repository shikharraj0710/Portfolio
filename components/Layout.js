import React, { useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NextNProgress from "nextjs-progressbar";


export default function Layout({ children }) {
  return (
    <>
      <NextNProgress
        color="#EBA352"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />

      <Header/>
      {children }
      <Footer />
    </>
  );
}
