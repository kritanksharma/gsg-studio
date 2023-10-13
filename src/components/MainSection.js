import React, { useState, useEffect } from "react";
import bg1 from "../static/bg1.mp4";

export default function MainSection({ onExploreMoreClick }) {
  const [dynamicText, setDynamicText] = useState("Visual Masters Converge.");
  const textOptions = [
    "Visual Masters Converge.",
    "Creative Minds Collaborate.",
    "Artistry in Motion.",
  ];
  const content =
    " We're Get Set Go - a production house where creativity knows no bounds. With captivating commercials, captivating music videos, thrilling fiction productions, 3D modelling, and VFX, we bring imagination to life. Join the hype as we make waves in the entertainment world!";

  useEffect(() => {
    const updateText = () => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setDynamicText(textOptions[randomIndex]);
    };

    const intervalId = setInterval(updateText, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        className="card"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          borderRadius: "0px",
        }}
      >
        <div className="card-body mx-3 text-start">
          <h3 className="display-6 text-light fw-bold my-5">
            Unveiling the Artistry of Seamless Production, From Pre to Post -
            Where{" "}
            <span
              className="text-light text-opacity-75 text-start"
              style={{ background: "#DC3545 " }}
            >
              {dynamicText}
            </span>
          </h3>
          <p className="card-text fs-6 text-secondary">{content}</p>

          <button type="button" className="btn btn-outline-danger mr-3 mt-2" onClick={() => onExploreMoreClick(true)}>
              Explore More
          </button>
        </div>
        <video
          src={bg1}
          className="w-100"
          autoPlay
          muted
          loop
          style={{ height: "10%" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
