import React from "react";
// import Logo from "./Resources/Logo 192x192.png";

export default function Spinner() {
  return (
    <div className="spinner mt-0 flex flex-col justify-center items-center space-x-2 my-36">
      {/* <img id="logo" src={Logo} alt="" /> */}
      <div
        id="spin"
        className="
        spinner
    spinner-border
    animate-spin
    inline-block
    w-8
    h-8
    border-4
    rounded-full
    text-orange-500
  "
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
