"use client";

import { useState, useEffect } from "react";
import StaticImage from "./components/StaticImage";
import TestApi from "./components/TestApi";
import InputLocation from "./components/InputLocation";

function App() {
  const [inputLocation, setInputLocation] = useState("51.089763,-113.978308");

  return (
    <div>
      <InputLocation onChange={setInputLocation} />
      <TestApi />
      <StaticImage inputCoordinate={inputLocation} />
      <div id="pano">pano soon!</div>
    </div>
  );
}

export default App;
