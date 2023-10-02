import React from "react";
import bg1 from "../static/bg1.mp4";

export default function MainSection() {
  const content=" We're Get Set Go - a production house where creativity knows no bounds. With captivating commercials, captivating music videos, thrilling fiction productions, 3D modelling, and VFX, we bring imagination to life. Join the hype as we make waves in the entertainment world!"
  return (
    <div>
     <div class="card"
       style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        borderRadius: "0px",
      }}>
 <div  className="card-body mx-3 text-start"
              
            >
              <h3 className="display-6 text-light fw-bold my-5">
                Unveiling the Artistry of Seamless Production, From Pre to Post
                - Where Creative Storytellers and{" "}
                <span className="text-danger text-opacity-75">
                  Visual Masters Converge.
                </span>
              </h3>
              <p className="card-text fs-6 text-secondary">
             {content}
              </p>

              <button type="button" className="btn btn-outline-danger mr-3 mt-2">
                <a className="nav-link" href="/service">
                  Explore More
                </a>
              </button>
            </div>
  <video src={bg1} className="w-100" autoPlay muted loop  style={{ height: "10%",}}>
            Your browser does not support the video tag.
          </video>
</div>
    </div>
  );
}
