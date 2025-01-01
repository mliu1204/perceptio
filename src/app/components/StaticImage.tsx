import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface StaticImageProps {
  inputCoordinate: string;
}
const StaticImage: React.FC<StaticImageProps> = ({ inputCoordinate }) => {
  const [imageUrl, setImageUrl] = useState(
    "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=51.089763,-113.978308&fov=80&heading=70&pitch=0&key=AIzaSyCo4C8j7kGJNFnr4hjK3KrANonXc5Dq56c&signature=SHS9gV4oFRrCX7KezbcCbs5NKz0="
  );

  const params = {
    coordinates: inputCoordinate,
  };

  //using coordinates to get image url
  useEffect(() => {
    axios
      .get("http://localhost:8080/pictures", { params })
      .then((response) => setImageUrl(response.data))
      .catch((error) => console.error("cant fetch sad: ", error));
  });

  return <img src={imageUrl} alt="Street View" />;
};

export default StaticImage;
