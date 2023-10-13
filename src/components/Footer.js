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
      className="card text-start m-0 bg-dark rounded-0"
    >
      <div className="card-body d-flex justify-content-between">
        <img
              src={logo}
              alt="Logo"
              width="50"
              height="50"
            />
    
        <p className="text-light">
          <small>
            Copyright @2023 GET SET GO Studio . All Rights Reserved by GET SET
            GO Studio.   
          </small>
          <span>
          <a href="/" className="text-light icon">
            <Icon
              className="p-1"
              path={mdiFacebook}
              size={1}
              title="Facebook"
            />
          </a>
          <a href="/" className="text-light icon">
            <Icon
              className="p-1"
              path={mdiLinkedin}
              size={1}
              title="LinkedIn"
            />
          </a>
          <a href="/" className="text-light icon">
            <Icon className="p-1" path={mdiTwitter} size={1} title="Twitter" />
          </a>
          <a href="/" className="text-light icon">
            <Icon
              className="p-1"
              path={mdiInstagram}
              size={1}
              title="Instagram"
            />
          </a>
          <a href="/" className="text-light icon">
            <Icon
              className="p-1"
              path={mdiYoutubeSubscription}
              size={1}
              title="You Tube"
            />
          </a>
        </span>
        </p>
      </div>
    </div>
  );
}
