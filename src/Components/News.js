import React from "react";
import NewsCard from "./NewsCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function News({ topic, head, region }) {
  // ? Define the Type of Variable in UseState to Avoid Errors
  const [data, setData] = useState([]);
  let loading = true;
  let page = 1;
  let apiKey = process.env.REACT_APP_MY_API_KEY;

  const getApiData = async () => {
    loading = true;

    axios
      .get(
        ` https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${topic}&page_size=50&lang=en&page=${page}`,

        {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
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
    // eslint-disable-next-line
    loading = true;
    getApiData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`pt-20  bg-gray-800 text-white`}>
      <h1 className="text-center font-bold text-2xl p-4">
        Top HeadLines on <span className="text-orange-500">{head}</span>
      </h1>
      <div className="newsContainer">
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
      {loading && <Spinner />}
    </div>
  );
}
