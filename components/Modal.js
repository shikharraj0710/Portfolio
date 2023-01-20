import React, { useEffect } from "react";

export default function Modal({ show, setShow }) {
  useEffect(() => {
    window.onclick = function (e) {
      if (e.target == document.getElementById("my-modal")) {
        document
          .getElementById("modal-content")
          .classList.remove("modal-animation-open");
        document
          .getElementById("modal-content")
          .classList.add("modal-animation-close");
        document
          .getElementById("modal-content")
          .classList.add("modal-animation-close");
        setTimeout(
          () => document.getElementById("my-modal").classList.add("hidden"),
          100
        );
        setShow(false);
      }
    };
    show
      ? (document.getElementById("my-modal").classList.remove("hidden"),
        document
          .getElementById("modal-content")
          .classList.remove("modal-animation-close"),
        document
          .getElementById("modal-content")
          .classList.add("modal-animation-open")
        )
      : (document.getElementById("my-modal").classList.add("hidden"),
        document
          .getElementById("modal-content")
          .classList.remove("modal-animation-open"),
        document
          .getElementById("modal-content")
          .classList.add("modal-animation-close")
        );
  }, [show]);

  const hanldleOKClick = () => {
    setShow(false);
    document
      .getElementById("modal-content")
      .classList.remove("modal-animation-open"),
      document
        .getElementById("modal-content")
        .classList.add("modal-animation-close");
    setTimeout(
      () => document.getElementById("my-modal").classList.add("hidden"),
      100
    );
  };
  return (
    <>
      <div
        className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "
        id="my-modal"
        style={{zIndex : "100"}}
      >
        <div
          id="modal-content"
          className="relative mx-auto p-5 border shadow-lg rounded-md bg-white w-[80%] lg:w-[40%]"
        >
          <div className="mt-3 text-center ">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Submitted!!!
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-xs md:text-sm text-gray-500">
                Your message has been taken into account. I'll get back to you
                ASAP.
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                onClick={hanldleOKClick}
                className="px-4 py-2 bg-darkGolden tracking-widest text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-[#1e1e1e] hover:text-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
