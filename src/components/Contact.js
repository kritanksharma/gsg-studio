import React, { useState } from "react";
import contact1 from "../static/contact.png";
import Form from "./Form";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const fillForm = () => {
    setShowForm(true);
  };
  const description =
    "Ready to take the next step in turning your creative vision into reality? Our team at Get Set Go Productions is eager to hear from you. Whether you have a project in mind, questions about our services, or you simply want to connect with our experts, we invite you to fill out the form below. Your message is important to us, and we will get back to you promptly to discuss how we can bring your ideas to life. Lets start the conversation and embark on an exciting journey of creativity and collaboration. ";

  return (
    <div className="bg-black">
      {showForm === false ? (
        <div className="card pb-3 w-100 bg-black text-light text-start">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={contact1} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-5">
                <h3 className="display-6 text-light fw-bold">
                  {" "}
                  Find out What's{" "}
                  <span className="theme-text-color">Next ? </span>{" "}
                </h3>
                <p className="text-light mx-3 mt-3 fw-regular">{description}</p>
                <button
                  type="button"
                  className="btn btn-outline-danger mx-3"
                  onClick={fillForm}
                >
                  {" "}
                  Connect With Us{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" card text-center bg-black"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <h3 className="display-5  mx-5  my-4 text-danger">
            We’d Love to hear from you!
          </h3>
          <p className="text-light mx-5 mb-5 fw-regular icon ">
            For any queries and collaborations, fill in the form below and we'll
            get back to you as soon as we can!
          </p>
          <div className="d-flex justify-content-center">
            <Form></Form>
          </div>
        </div>
      )}
    </div>
  );
}
