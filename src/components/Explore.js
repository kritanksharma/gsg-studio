import React from 'react'

export default function Explore() {
    const subtitle =
    "Explore a world of captivating visuals and immersive storytelling that transcends the ordinary !!";
    const videos1 = [
        "https://www.youtube.com/embed/zvGyXenrp4M",
        "https://www.youtube.com/embed/uAkvwgsOj4M",
        "https://www.youtube.com/embed/Ey-BeuV4Xk8",
        "https://www.youtube.com/embed/P1266YbTBhg",
        "https://www.youtube.com/embed/nk_y_Soo_hY",
        "https://www.youtube.com/embed/hbfDEUlmo6Q",
        "https://www.youtube.com/embed/S2vyJggvGvA",
        "https://www.youtube.com/embed/uAkvwgsOj4M",
    
      ];
      const videos2 = [
        "https://www.youtube.com/embed/zvGyXenrp4M",
        "https://www.youtube.com/embed/uAkvwgsOj4M",
        "https://www.youtube.com/embed/Ey-BeuV4Xk8",
        "https://www.youtube.com/embed/P1266YbTBhg",
        "https://www.youtube.com/embed/nk_y_Soo_hY",
        "https://www.youtube.com/embed/hbfDEUlmo6Q",
        "https://www.youtube.com/embed/S2vyJggvGvA",
        "https://www.youtube.com/embed/uAkvwgsOj4M",
    
      ];
  return (
    <>
    <div className="text-light pt-3" style={{ background: '#1A1C23' }}>
    <h2 className="card-title fw-bold display-5 text-light p-3 text-start">
     Embark on a journey through  <span className="text-danger"> Cinematic Brilliance.</span>
        </h2>
        <p className="text-light px-3  pb-3 text-start ">{subtitle}</p>
        <h3 className="display-6 text-secondary mx-2 text-start fw-medium ">Sketches</h3>
        <div className="d-flex flex-row pb-3 px-2 overflow-auto scroll-container">
  {videos1.map((videoUrl, index) => (
    <div key={index}>
      <div
        className="card border-0 shadow-lg overflow-hidden card-focus-animation mx-2 rounded-0 my-3"
        style={{ width: "50vh", backgroundColor: "#1A1C23" }}
      >
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title={`YouTube Video ${index}`}
          frameborder="0"
          allowfullscreen
        />
      </div>
    </div>
  ))}
</div></div>

<div className=" text-light" style={{ background: '#1A1C23' }}>
<h3 className="display-6 text-secondary mx-2 text-start fw-medium">Web Shows </h3>
<div className="d-flex flex-row pb-3 px-2 overflow-auto scroll-container">
{videos2.map((videoUrl, index) => (
<div key={index}>
<div
className="card border-0 shadow-lg overflow-hidden card-focus-animation mx-2 rounded-0 my-3"
style={{ width: "50vh", backgroundColor: "#1A1C23" }}
>
<iframe
 width="100%"
 height="100%"
 src={videoUrl}
 title={`YouTube Video ${index}`}
 frameborder="0"
 allowfullscreen
/>
</div>
</div>
))}
</div></div></>
  )
}
