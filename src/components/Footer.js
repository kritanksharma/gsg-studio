import React from "react";
import Icon from "@mdi/react";
import logo from "../static/logo.png";
import {
  mdiFacebook,
  mdiLinkedin,
  mdiTwitter,
  mdiInstagram,
  mdiYoutubeSubscription,
} from "@mdi/js";
export default function Footer() {
  return (
    <div
      className="card text-start m-0 bg-white"
      style={{
        border: "none",
        height: "100%",
        borderRadius: "0px",
        margin: "0px",
      }}
    >
      <div className="card-body">
        <h2 className="card-title mb-4">
        <img
              src={logo}
              alt="Logo"
              width="30"
              height="30"
              className="justify-content-center"
            />
          <span>  India's Premium VASS Platfrom</span>
        </h2>
        <p className="card-text mb-4">
        At Get Set Go, we are the builders of imagination, the artists of storytelling, and the creators of fascinating visuals. Our squad is passionate about bringing ideas to life and we are the masters when it comes to providing top-notch studio services and a wide range of video production solutions.

        </p>
        <p className="card-text mb-4">
        Welcome to Get Set Go, the creative production studio that's here to take your brand to soaring heights! We are the architects of high-quality content that not only speaks your message but elevates it to a level of excellence you've never imagined. What makes us different? We're not just content creators; we're brand experts. We take the time to truly understand your business, so what we create is a perfect match for your brand.
        </p>
        <p>
          <a href="/" className="text-dark icon">
            <Icon
              className="p-1"
              path={mdiFacebook}
              size={1}
              title="Facebook"
            />
          </a>
          <a href="/" className="text-dark icon">
            <Icon
              className="p-1"
              path={mdiLinkedin}
              size={1}
              title="LinkedIn"
            />
          </a>
          <a href="/" className="text-dark icon">
            <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
          </a>
          <a href="/" className="text-dark icon">
            <Icon
              className="p-1"
              path={mdiInstagram}
              size={1}
              title="Instagram"
            />
          </a>
          <a href="/" className="text-dark icon">
            <Icon
              className="p-1"
              path={mdiYoutubeSubscription}
              size={1}
              title="You Tube"
            />
          </a>
        </p>
        <hr />
        <p className="text-center">
          <small>
            Copyright @2023 GET SET GO Studio . All Rights Reserved by GET SET
            GO Studio.
          </small>
        </p>
      </div>
    </div>
  );
}
