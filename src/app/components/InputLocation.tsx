import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface InputLocationProps {
  onChange: (s: string) => void;
}

const InputLocation: React.FC<InputLocationProps> = ({ onChange }) => {
  const [inputLocation, setInputLocation] = useState("");
  const [savedLocation, setSavedLocation] = useState("51.089763,-113.978308");

  const handleLocationInputEnter = (e: any) => {
    if (e.key == "Enter") {
      onChange(e.target.value);
      setSavedLocation(inputLocation);
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
        autoFocus
      />
      <p>Location inputted (saved): {savedLocation}</p>
      <p>Location inputted: {inputLocation}</p>\{" "}
    </div>
  );
};

export default InputLocation;
