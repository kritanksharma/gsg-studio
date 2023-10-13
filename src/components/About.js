import React, { useState, useEffect } from "react";
import s1 from "../static/s1.jpeg";
import s2 from "../static/s2.jpeg";
import s3 from "../static/s3.jpeg";
import logo2 from "../static/about.png";
export default function About() {
  const workData = [
    {
      title: "Photography",
      content1:
        "We are the architects of high-quality content that not only speaks your message but elevates it to a level of excellence you have never imagined.",
      content2: "~reactnest",
    },
    {
      title: "Music",
      content1:
        "We are the architects of high-quality content that not only speaks your message but elevates it to a level of excellence you have never imagined.",
      content2: "~reactnest",
    },
    {
      title: "2D/ 3D Animation",
      content1:
        "We are the architects of high-quality content that not only speaks your message but elevates it to a level of excellence you have never imagined.",
      content2: "~reactnest",
    },
  ]; // client review data [title , content1 , content2]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rawImages = [
    { image: s1 },
    { image: s2 },
    { image: s3 },
    { image: s1 },
    { image: s2 },
    { image: s3 },
  ];
  const title1 = "Client testimonials";
  const subtitle1 =
    "Let’s have a look at what our clients have to say about their experience at Get set go.";
  const title2 = "Studio pictures";
  const subtitle2 =
    "Our studio is the place where all the creativity takes place and ideas come to life! Let’s have a look at our brilliant set ups.";

  const about = [
    { title: "ABOUT US !!" },
    {
      paragraph1:
        "Welcome to Get Set Go, the creative production studio that's here to take your brand to soaring heights! We are the architects of high-quality content that not only speaks your message but elevates it to a level of excellence you've never imagined. ",
    },
    {
      paragraph2:
        "Regardless of the timeline or the scale of your vision, we're the ones who turn dreams into reality.",
    },
    {
      paragraph3:
        "What makes us different? We're not just content creators; we're brand experts. We take the time to truly understand your business, so what we create is a perfect match for your brand.",
    },
    {
      paragraph4:
        "So, join us on this creative & cinematic journey and watch your brand's story unfold like never before. ",
    },
  ];

  const [images, setImages] = useState(rawImages);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    function handleScroll() {
      if (scrollContainer) {
        const containerWidth = scrollContainer.offsetWidth;
        const imagesWidth = images.length * 40;
        if (containerWidth - scrollContainer.scrollLeft < imagesWidth) {
          // If the remaining scroll width is less than the total width of images
          setImages((prevImages) => [...prevImages, ...rawImages]);
        }
      }
    }

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [images, rawImages]);

  return (
    <>
      <div
        className="card w-100 p-3 bg-dark text-light"
        style={{ border: "none", borderRadius: "0px" }}
      >
        <div
          className="card w-100 p-3 bg-dark text-light"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={logo2}
                className="img-fluid rounded-start mt-5"
                alt="..."
                style={{ width: "300px", height: "300px" }}
              />
            </div>
            <div className="col-md-8">
              <h3 className="display-6  fw-bold text-end px-5">
                {about[0].title}
              </h3>
              <div className="card-body">
                <p className="card-text text-start">{about[1].paragraph1}</p>
                <p className="card-text text-start">{about[2].paragraph2}</p>
                <p className="card-text text-start">{about[3].paragraph3}</p>
                <p className="card-text text-start">{about[4].paragraph4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div
        className="card w-100 p-3 bg-dark text-light"
        style={{ border: "none", borderRadius: "0px" }}
      >
        <h3 className="display-6 text-light text-start mx-2">
          {workData.length > 0 ? title1 : ""}
        </h3>
        <p className=" mx-2 text-start text-light">
          {workData.length > 0 ? subtitle1 : ""}
        </p>

        <div className="row g-0 mx-4 mb-5 bg-dark text-light">
          {workData.length > 0 &&
            workData.map((item, index) => (
              <div key={index} className="col-md-4 ">
                <div className="container text-center my-1" >
                  <div className="row">
                    <div className="col">
                      <div className="card card-focus-animation text-light" style={{backgroundColor:'#1A1C23'}}>
                        <span className="position-absolute top-0 start-100 translate-middle  bg-danger badge">
                          New
                        </span>
                        <div className="row g-0">
                          <div className="col">
                            <div className="card-body text-start">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text fs-6 fw-regular">
                                {item.content1}
                              </p>
                              <p className="card-text">
                                <small className="text-body-light">
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

        <h3 className="display-6 text-light bg-dark mx-2 text-start ">{title2}</h3>
        <p className="text-light bg-dark mx-2 text-start ">{subtitle2}</p>

        <div className="d-flex flex-row mb-3 mx-5 px-5 overflow-auto scroll-container">
      {images.map((item, index) => (
        <div key={index} className="scroll-loop">
          <div
            className="card border-0 shadow-lg overflow-hidden card-focus-animation mx-2 rounded-0 my-3"
            style={{ width: "40vh", backgroundColor: "#1A1C23" }}
          >
            <img
              src={item.image}
              className="img-fluid rounded-0 p-3"
              alt="..."
            />
          </div>
        </div>
      ))}
    </div>
      </div>
    </>
  );
}
