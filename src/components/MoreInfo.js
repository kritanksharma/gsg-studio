import React from "react";
import "./styles.css"; // Import the CSS file

export default function MoreInfo(props) {

  
  return (
    <>
      <div  className="mt-5">
        <h2 className="card-title fw-bold display-5  mt-5">
        What be bring to the  <span className="text-danger"> table</span>
        </h2>
        <p className="card-text fs-6 m-3">
        {props.head[0].headDescription}
        </p>
      </div>

    
      <div>
      <div className="mt-2 d-flex flex-row  mx-2 overflow-auto">
        {props.body.map((item, index) => (
          <div key={index} className="scroll-loop">
            <div className="card border-0 shadow-lg overflow-hidden card-focus-animation p-2 mx-3 my-3" style={{width:'40vh'}}>
              <img src={item.image} className="card-img-top" alt="..." style={{height:'40vh' , width:'40vh'}}/>
              <div className="card-body">
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="p-1">{item.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
