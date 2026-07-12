import React from "react";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Error from "./components/Error/Error";
import Apple from "./components/Apple/Apple";
import Tesla from "./components/Tesla/Tesla";

import Tech from "./components/Tech/Tech";
import USB from "./components/USB/USB";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="apple" element={<Apple />} />
        <Route path="home/apple" element={<Apple />} />
        <Route path="tesla" element={<Tesla />} />
        <Route path="home/tesla" element={<Tesla />} />
        <Route path="usb" element={<USB />} />
        <Route path="home/usb" element={<USB />} />
        <Route path="tech" element={<Tech />} />
        <Route path="home/tech" element={<Tech />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
