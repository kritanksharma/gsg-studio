
import React, { useState} from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import NavBar from "./components/NavBar";
import MoreInfo from "./components/MoreInfo";
import Contact from "./components/Contact";
import photoshoot from "./static/photoshoot.png";
import podcast from "./static/podcast.png";
import documentries from "./static/docs.png";
import music from "./static/music.png";
import ads from "./static/ads.png";
import flim from "./static/flim.png";
import modelling from "./static/3d.png";
import service from "./static/service.png";
import Service from "./components/Service";
import About from "./components/About";
import Explore from "./components/Explore";
function App() {
  const [exploreMore, setExploreMore] = useState(false);

  const handleExploreMoreClick = (value) => {
    setExploreMore(value);
  };
  // More info content
  const moreinfoHead = [
    {
      headDescription:
        "At Get Set Go, we are the builders of imagination, the artists of storytelling, and the creators of fascinating visuals. Our squad is passionate about bringing ideas to life and we are the masters when it comes to providing top-notch studio services and a wide range of video production solutions. At Get Set Go, our hearts beat to the rhythm of creativity, and our specialty is bringing your finest ideas to life.",
    },
  ];
  const moreinfoBody = [
    {
      title: "Fiction Film",
      body: "Dive into a world of Fictional wonders with Get set go!",
      image: flim,
    },
    {
      title: "Documentaries",
      body: "Dive into a world of Fictional wonders with Get set go! ",
      image: documentries,
    },
    {
      title: "Podcasts",
      body: "Let your voice meet storytelling at our mind blowing studios!",
      image: podcast,
    },
    {
      title: "Music videos ",
      body: "It’s time to turn up the beat with Get set go!",
      image: music,
    },
    {
      title: "Photoshoots",
      body: "Lights, Camera , Pose! Yes, it’s that simple at Get set Go!",
      image: photoshoot,
    },
    {
      title: "Ads/ Commercials",
      body: "We’re here to turn your ideas into a blockbuster commercial!",
      image: ads,
    },
    {
      title: "Animation & 3D modeling",
      body: "It’s the era of Animation & 3D &  here to make it happen.!",
      image: modelling,
    },
    {
      title: "Pro editing services",
      body: "Sit back and relax, our editors will make it happen!",
      image: service,
    },
  ];

  return (
    <div className="App">
      <NavBar title="GET SET GO Studio"></NavBar>
      {exploreMore===false ? (   <><div id="home">
          <MainSection onExploreMoreClick={handleExploreMoreClick} />
        </div><div id="services">
            <div className="py-1" style={{ background: '#1A1C23' }}></div>
            <MoreInfo head={moreinfoHead} body={moreinfoBody} />
          </div><Service></Service><div id="about">
            <div className="py-1 bg-dark"></div>
            <About></About>
          </div><div id="contact">
            <Contact></Contact>
          </div></>): (<div> <Explore></Explore></div>)}
   

      <Footer></Footer>
     
    </div>
  );
}

export default App;
