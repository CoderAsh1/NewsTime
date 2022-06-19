import React from "react";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function News({ topic, head }) {
  // ? Define the Type of Variable in UseState to Avoid Errors
  const [data, setData] = useState([]);
  const [mode, setMode] = useState({
    color: "black",
    bg: "white",
  });
  let loading = true;
  let page = 1;

  const getApiData = async () => {
    loading = true;
    // api key == dkDGUCa35K1OoSbsf-TfylB7iSPH4ID1n_SdPo2Um9o
    axios
      .get(
        ` https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=${topic}&page_size=50&lang=en&page=${page}`,

        {
          method: "GET",
          headers: {
            "x-api-key": "wN-Swh-GYn1qaQxb46R0pdf_nBoQYfiggrOpYXEIzJQ",
          },
        }
      )
      .then((response) => {
        console.log(response);
        let result = [];
        response.data.articles.forEach((e) => result.push(e));
        setData((oldResult) => [...oldResult.concat(...result)]);
      });
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loading = true;
      page += 1;
      getApiData();
      loading = false;
    }
  }

  useEffect(() => {
    loading = true;
    getApiData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleMode = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        bg: "black",
      });
      document.body.classList.add("dark");
      document.body.classList.remove("white");
    }
    if (mode.color === "white") {
      setMode({
        color: "black",
        bg: "white",
      });
      document.body.classList.add("white");
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className={`pt-20 bg-${mode.bg} text-${mode.color}`}>
      <h1 className="text-center font-bold text-2xl p-4">
        Top HeadLines on <span className="text-orange-500">{head}</span>
      </h1>
      <button className="mode">
        <div class="flex justify-center" onClick={handleMode}>
          <div class="form-check form-switch">
            <input
              class="toggle form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </button>
      <div className="newsContainer">
        {/* In map use () insted {} since it's JSX */}
        {data.map((result, i) => (
          <div key={i}>
            <NewsCard
              title={result.title}
              description={result.excerpt}
              urlToImage={result.media}
              url={result.link}
              date={result.published_date}
              mode={mode}
            />
          </div>
        ))}
      </div>
      {loading && <Spinner />}
    </div>
  );
}
