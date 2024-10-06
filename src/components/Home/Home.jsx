import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container vhHome">
      <div className="row h-50 ">
        <div className="col-5 homeCard g-5 d-flex align-items-center justify-content-center border-1 border-dark border rounded-4">
          <Link to="apple">
            <img
              className="w-100 cardImg"
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className=" col-2"></div>
        <div className="col-5 g-5 homeCard d-flex align-items-center justify-content-center border-1 border-dark border rounded-4">
          <Link to="tesla">
            <img
              className="w-100 h-75 cardImg"
              src="https://miro.medium.com/v2/resize:fit:1400/1*bmTYFDT6yT65Q7wTDWhGZQ.jpeg"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="row h-50">
        <div className="col-5 g-5 homeCard d-flex align-items-center justify-content-center border-1 border-dark border rounded-4">
          <Link to="usb">
            <img
              className="w-100 cardImg"
              src="https://logowik.com/content/uploads/images/dollar3010.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className=" col-2"></div>
        <div className="col-5 g-5 homeCard d-flex  align-items-center justify-content-center border-1 border-dark border rounded-4">
          <Link to="tech">
            <img
              className="custom-size cardImg"
              src="https://img.freepik.com/premium-vector/processor-icon-logo-vector-design-template_827767-1789.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
