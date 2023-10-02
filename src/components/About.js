import React from "react";
import s1 from "../static/s1.jpeg";
import s2 from "../static/s2.jpeg";
import s3 from "../static/s3.jpeg";
import logo2 from "../static/logo2.jpeg";
export default function About() {
  const workData = [
    {
      title: "Photoshoot",
      content1:
        " Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry s standard dummy text ever",
      content2: " ~ reactnest",
    },
    {
      title: "Editing 3D/2D",
      content1:
        " Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry s standard dummy text ever",
      content2: " ~ reactnest",
    },
    {
      title: "Music",
      content1:
        " Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. Lorem Ipsum has been the industry s standard dummy text ever",
      content2: " ~ reactnest",
    },

  ];
  const setImages = [
    { image: s1 },
    { image: s2},
    { image: s3 },
    { image: s1 },
    { image: s2},
    { image: s3 },
  ];
  const title1 = "What Client Says ??";
  const title2 = "Our Studio !!";

  const about=[
    {title:"ABOUT US !!"},
    {paragraph1:" Unleash your business's true potential through the reinforcement of a robust cybersecurity posture. Our holistic  solutions, coupled with strategic expertise, equip you to confidently navigate the intricate digital landscape. By bolstering your defenses, safeguarding sensitive data, and ensuring uninterrupted operations, you'll achieve an elevated level of cyber resilience. Seize control of your digital destiny, empowering growth with a fortified cybersecurity foundation that stands as a pillar of strength."},
    {paragraph2:" Unleash your business's true potential through the reinforcement of a robust cybersecurity posture. Our holistic  solutions, coupled with strategic expertise, equip you to confidently navigate the intricate digital landscape. By bolstering your defenses, safeguarding sensitive data, and ensuring uninterrupted operations, you'll achieve an elevated level of cyber resilience. Seize control of your digital destiny, empowering growth with a fortifi"}
  ]
  



  return (
    <>
    <div
        className="card w-100 p-3"
        style={{ border: "none", borderRadius: "0px"}}
      >
        <div
          className="card w-100 p-3"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={logo2}
                className="img-fluid rounded-start mt-4"
                alt="..."
                style={{width:"300px" , height:'300px'}}
              />
            </div>
            <div className="col-md-8 mt-4">
            <h3 className="display-6  fw-bold text-end px-5">{about[0].title}</h3>
              <div className="card-body">
                <p className="card-text text-start">
                {about[1].paragraph1}
                </p>
                <p className="card-text text-start">
                {about[2].paragraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div
        className="card w-100 p-3"
        style={{ border: "none", borderRadius: "0px" }}
      >
        <h3 className="display-6 text-black mx-3 text-start mx-5">{title1}</h3>
   
         
            <div className="row g-0 mx-5 mb-5">
              {workData.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="container text-center my-1">
                    <div className="row">
                      <div className="col">
                        <div className="card card-focus-animation">
                        <span className="position-absolute top-0 start-100 translate-middle  bg-danger badge">New</span>
                          <div className="row g-0">
                            <div className="col">
                              <div className="card-body text-start">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text fs-6 fw-regular">
                                  {item.content1}
                                </p>
                                <p className="card-text">
                                  <small className="text-body-secondary">
                                    {item.content2}
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="display-6 text-black mx-3 text-start mx-5">{title2}</h3>
            <div className="d-flex flex-row mb-3 mx-5 px-5 overflow-auto">
              {setImages.map((item, index) => (
                <div key={index} className="scroll-loop">
                   <div className="card border-0 shadow-lg overflow-hidden card-focus-animation mx-3 rounded-0 my-3" style={{width:'40vh'}}>
                  <img
                    src={item.image}
                    className="img-fluid rounded-0 p-3 img-grayscale"
                    alt="..."
                  /></div>
                </div>
              ))}
            </div>
       
      </div>
    </>
  );
}
