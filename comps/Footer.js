import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <center>
          <img
            style={{ width: "170px", marginTop: "20px" }}
            src="/images/sw-white.png"
            alt="smallworld-logo"
          />
          <div className="footer-menu">
            <a
              href="https://t.me/smallworldventure"
              target="_blank"
              rel="noreferrer"
              title="Telegram Community"
            >
              <div>
                <FaTelegramPlane />
              </div>
            </a>
            <a
              href="https://web.facebook.com/smallworldventure/?_rdc=1&_rdr"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <div>
                <FaFacebookF />
              </div>
            </a>
            <a
              href="https://twitter.com/smallworldvc"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <div>
                <FaTwitter />
              </div>
            </a>
            <a
              href="https://medium.com/smallworldvc"
              target="_blank"
              rel="noreferrer"
              title="Medium"
            >
              <div>
                <FaMediumM />
              </div>
            </a>
          </div>
        </center>
      </div>
      <div className="copy-right">
        Copyright © SmallWorld Venture, a Member of{" "}
        <span>
          <b>
            <a
              href="https://www.isigroup.com.kh/#1"
              target="_blank"
              rel="noreferrer"
            >
              ISIGROUP
            </a>
          </b>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Footer;
