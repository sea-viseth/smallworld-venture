import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <center>
        <img
          style={{ width: "170px", marginTop: "20px" }}
          src="/images/sw-gray.png"
          alt="smallworld-logo"
        />
        <div className="footer-menu">
          <a
            href="https://t.me/smallworldventure"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <FaTelegramPlane />
            </div>
          </a>
          <a
            href="https://web.facebook.com/smallworldventure/?_rdc=1&_rdr"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <FaFacebookF />
            </div>
          </a>
          <a
            href="https://twitter.com/smallworldvc"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <FaTwitter />
            </div>
          </a>
          <a
            href="https://medium.com/smallworldvc"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <FaMediumM />
            </div>
          </a>
        </div>
      </center>
    </div>
  );
}

export default Footer;
