import React from "react";
import bg3 from "../static/bg3.png";
export default function Service() {
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
        <div className="card-body">
          <p className="text-light fs-2 fw-regular mt-2 ">
            Exploring the Mystique of Radiant Monument !!
          </p>
          <div className="row my-5 display-6 fw-regular">
            <div className="col-md-4">
              <p className="text-danger display-3 fw-bold"> 500 +</p>
              <p className="fs-4">Happy Clients</p>
            </div>

            <div className="col-md-4">
              <p className="text-danger display-3 fw-bold"> 100 +</p>
              <p className="fs-4">Achievements</p>
            </div>
            <div className="col-md-4">
              <p className="text-danger display-3 fw-bold"> 1,000MN+</p>
              <p className="fs-4">Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
