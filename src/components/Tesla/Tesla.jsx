import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tesla() {
  const [tesla, setTesla] = useState([]);
  const getTeslaNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-09-03&sortBy=publishedAt&apiKey=e551f87d9aa64513a38a98d096808d9e"
      );
      console.log(response.data.articles);
      setTesla(response.data.articles);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getTeslaNews();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="my-5"></div>
        {tesla.map((n, index) => (
          <div className="col-4  d-flex mt-5 " key={index}>
            <div className="card w-100 rounded-5 h-100">
              <div
                className="card-img-top img-container"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <a href={n.url}>
                  <img
                    src={
                      n.urlToImage ||
                      "https://i.ebayimg.com/00/s/MTAxMFgxNjAw/z/rP4AAOSwiMRbDbgM/$_57.JPG?set_id=8800005007"
                    }
                    alt={n.title}
                    className="img-fluid w-100 h-100 rounded-top-5 newsimg  "
                    style={{ objectFit: "cover" }}
                  />
                </a>
              </div>
              <div className="card-body">
                <h4 className="mt-3">
                  <a
                    href={n.url}
                    className=" text-decoration-none fw-bolder title "
                  >
                    {n.title}
                  </a>
                </h4>
                <p>{n.description}</p>
                <p className=" fw-light">By: {n.author}</p>
                <p className=" fw-lighter">source: {n.source.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
