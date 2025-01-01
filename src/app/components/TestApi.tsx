import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TestApi: React.FC = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/locations")
      .then((response) => setData(response.data))
      .catch((error) => console.error("cant fetch sad: ", error));
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default TestApi;
