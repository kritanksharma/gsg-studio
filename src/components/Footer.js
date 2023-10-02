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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including.
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
