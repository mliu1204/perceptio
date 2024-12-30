"use client";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [inputLocation, setInputLocation] = useState("");
  const [savedLocation, setSavedLocation] = useState("");
  const [data, setData] = useState("");
  const [imageUrl, setImageUrl] = useState("47.5763831,-122.4211769");
  const apiKey = "AIzaSyCo4C8j7kGJNFnr4hjK3KrANonXc5Dq56c";
  const signature = "bestview";

  const generateURL = (loc: string) => {
    return `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${loc}&fov=80&heading=70&pitch=0&key=${apiKey}&signature=${signature}`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/locations")
      .then((response) => setData(response.data))
      .catch((error) => console.error("cant fetch sad: ", error));
  }, [savedLocation]);

  const handleLocationInputEnter = (e: any) => {
    if (e.key == "Enter") {
      setSavedLocation(inputLocation);
      setImageUrl(generateURL(savedLocation));
    }
  };

  const handleLocationInputChange = (e: any) => {
    setInputLocation(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={inputLocation}
        onChange={handleLocationInputChange}
        onKeyDown={handleLocationInputEnter}
      />
      <p>Location inputted (saved): {savedLocation}</p>
      <p>Location inputted: {inputLocation}</p>
      <h1>API Data</h1>
      <img />
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      <img src={imageUrl} alt="Street View" />
    </div>
  );
}

export default App;
