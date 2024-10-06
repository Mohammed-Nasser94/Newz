import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Apple() {
  const [apple, setApple] = useState([]);
  const getAppleNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2024-09-30&to=2024-09-30&sortBy=popularity&apiKey=e551f87d9aa64513a38a98d096808d9e"
      );
      console.log(response.data.articles);
      setApple(response.data.articles);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    getAppleNews();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="my-5"></div>
        {apple.map((n, index) => (
          <div className="col-4  d-flex mt-5 " key={index}>
            <div className="card w-100 rounded-5">
              <div
                className="card-img-top img-container"
                style={{ height: "200px", overflow: "hidden" }}
              >
                <a href={n.url}>
                  <img
                    src={
                      n.urlToImage ||
                      "https://variety.com/wp-content/uploads/2016/03/apple-computers-logo-placeholder.jpg?w=1024"
                    }
                    alt={n.title}
                    className="img-fluid w-100 h-100 rounded-top-5 newsimg "
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
