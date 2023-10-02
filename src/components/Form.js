import React, { useState } from "react";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import completed from "../static/completed.png";
import bg2 from "../static/bg2.png";

export default function Form() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const [emailError, setEmailError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "subject") {
      setSubject(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return; // Prevent form submission if email is invalid
    }

    const obj = {
      email: email,
      subject: subject,
      Message: message,
    };

    // Push data to the 'posts' node
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;

    // Update the database
    update(ref(database), updates);

    // Clear the input fields
    setEmail("");
    setSubject("");
    setMessage("");

    setComplete(true);

    setTimeout(() => {
      setComplete(false);
    }, 9000);
  };

  //function to check fields
  const isEnable = () => {
    return email.length > 0 && message.length > 0 && subject.length > 0;
  };

  return (
    <>
      {complete === false ? (
        <div
          className="card text-starttext-light mx-3"
          style={{ width: "600px" , backgroundColor:'black'}}
        >
          <div className="card-body text-light text-start">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control custom-input"
                  style={{backgroundColor:'black'}}
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleInputChange}
                />

                <div id="emailHelp" className="form-text">
                  {emailError && (
                    <div className="text-danger">{emailError}</div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  What is your security objective?
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  style={{backgroundColor:'black'}}
                  id="subject"
                  value={subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="4"
                  className="form-control custom-input"
                  style={{backgroundColor:'black'}}
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                disabled={!isEnable()}
                className={`btn btn-${
                  isEnable() ? "danger" : "danger"
                }`}
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
          <img
          src={bg2}
          className="card-img-bottom"
          alt="..."
          style={{ height: "150px" }}
        />
        </div>
      ) : null}

      {complete === true ? (
        <img
          src={completed}
          alt="..."
          style={{ width: "600px", height: "600px" }}
        />
      ) : null}
    </>
  );
}
