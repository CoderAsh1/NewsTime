import React from "react";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function News({ topic, head }) {
  // ? Define the Type of Variable in UseState to Avoid Errors
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);

  const getApiData = async () => {
    // api key == dkDGUCa35K1OoSbsf-TfylB7iSPH4ID1n_SdPo2Um9o
    axios
      .get(
        ` https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=${topic}&page_size=12&lang=en&page=${page}`,

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
      setpage(page + 1);
      getApiData();
    }
  }

  useEffect(() => {
    getApiData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20">
      <h1 className="text-center font-bold text-2xl p-4">
        Top HeadLines on <span className="text-orange-500">{head}</span>
      </h1>
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
            />
          </div>
        ))}
      </div>
      <Spinner />
    </div>
  );
}
