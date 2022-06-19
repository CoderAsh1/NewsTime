import React from "react";
import FallbackImg from "./Resources/fallbackImg.jpg";

export default function NewsCard({
  title,
  description,
  urlToImage,
  url,
  date,
  mode,
}) {
  const load = () => {
    if (!urlToImage) {
      return FallbackImg;
    }
  };
  function day(d) {
    let date = new Date().toLocaleString();
    let h = new Date(d);
    let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let myDay = arr[h.getDay()];
    return myDay + " " + date;
  }
  return (
    <div className={`p-4 text-${mode.color} mb-0`}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={urlToImage}
          onLoad={load}
          alt="NewsTime"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-bold text-gray-400 mb-1">
            {day(date)}
          </h2>
          <h1 className="title-font text-lg font-medium  mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            <a
              className="text-orange-400 font-bold inline-flex items-center md:mb-2 lg:mb-0"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                data-darkreader-inline-stroke=""
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
