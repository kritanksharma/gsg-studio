import React, { useState } from "react";
import bg3 from "../static/bg3.png";
import CountUp from 'react-countup'; 
export default function Service() {
  const [clientsCount, setClientsCount] = useState(5000);
  const [achievementsCount, setAchievementsCount] = useState(1000);
  const [viewsCount, setViewsCount] = useState(1000);

  const handleMouseEnter = () => {
    setClientsCount(5000); 
    setAchievementsCount(1000); 
    setViewsCount(1000); 
  };

  const handleMouseLeave = () => {
    setClientsCount(0); 
    setAchievementsCount(0); 
    setViewsCount(0); 

    setTimeout(() => {
      setClientsCount(5000);
      setAchievementsCount(1000);
      setViewsCount(1000);
    }, 100);
  };
  return (
    <div>
      <div
        className="card bg-black text-light"
        style={{
          border: "none",
          borderRadius: "0px",
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          opacity: 1,
        }}
      >
       <div className="card-body" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="text-light fs-2 fw-regular mt-2">
        Exploring the Mystique of Radiant Monument !!
      </p>
      <div className="row my-5 display-6 fw-regular">
        <div className="col-md-4">
          <p className="text-danger display-3 fw-bold">
            <CountUp start={0} end={clientsCount} duration={3} /> +
          </p>
          <p className="fs-4">Happy Clients</p>
        </div>

        <div className="col-md-4">
          <p className="text-danger display-3 fw-bold">
            <CountUp start={0} end={achievementsCount} duration={3} /> +
          </p>
          <p className="fs-4">Achievements</p>
        </div>
        <div className="col-md-4">
          <p className="text-danger display-3 fw-bold">
            <CountUp start={0} end={viewsCount} duration={3} /> MN +
          </p>
          <p className="fs-4">Views</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
