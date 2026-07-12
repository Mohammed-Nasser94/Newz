import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    to: "apple",
    label: "Apple",
    img: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
  },
  {
    to: "tesla",
    label: "Tesla",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*bmTYFDT6yT65Q7wTDWhGZQ.jpeg",
  },
  {
    to: "usb",
    label: "US Business",
    img: "https://logowik.com/content/uploads/images/dollar3010.jpg",
  },
  {
    to: "tech",
    label: "Tech",
    img: "https://img.freepik.com/premium-vector/processor-icon-logo-vector-design-template_827767-1789.jpg",
  },
];

export default function Home() {
  return (
    <div className="vhHome">
      <div className="homeGrid">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className="homeCard">
            <div className="homeCard__imgWrap">
              <img className="cardImg" src={s.img} alt={s.label} />
            </div>
            <span className="homeCard__label">{s.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
