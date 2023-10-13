import React, { useState, useEffect } from "react";
import "./styles.css"; // Import the CSS file

export default function MoreInfo(props) {
  const [cards, setCards] = useState(props.body);
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    function handleScroll() {
      if (scrollContainer) {
        const containerWidth = scrollContainer.offsetWidth;
        const cardsWidth = cards.length * 40; // Assuming each card is 40vh wide
        if (containerWidth - scrollContainer.scrollLeft < cardsWidth) {
          // If the remaining scroll width is less than the total width of cards
          setCards((prevCards) => [...prevCards, ...props.body]);
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
  }, [cards, props.body]);
  return (
    <>
      <div  style={{background:'#1A1C23'}}>
        <h2 className="card-title fw-bold display-5 text-light pt-3">
          Why <span className="text-danger"> GET SET GO?</span>
        </h2>
        <p className="card-text fs-6 mt-3 text-light pb-5 px-4">{props.head[0].headDescription}</p>
      </div>

      <div style={{background:'#1A1C23'}}>
        <div className="d-flex flex-row  mx-2 overflow-auto scroll-container" >
          {cards.map((item, index) => (
            <div key={index} className="scroll-loop">
              <div
                className="card border-0 shadow-lg overflow-hidden card-focus-animation p-2 mx-3 my-3 bg-dark text-light"
                style={{ width: "40vh" }}
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "40vh", width: "40vh" }}
                />
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
