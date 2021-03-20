import { Row, Col } from "antd";
import Link from "next/link";
function Footer() {
  return (
    <div className="footer">
      <Row justify="space-between">
        <Col className="footer-menu">
          <Link href="/about">About</Link>
          <Link href="/works">Works</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </Col>
        <Col className="footer-menu right-footer">
          <a href="https://t.me/smallworldventure">
            <img src="/images/telegram.svg" alt="telegram" />
            <span> Telegram</span>
          </a>
          <a
            style={{ margin: "22px 0" }}
            href="https://web.facebook.com/smallworldventure/?_rdc=1&_rdr"
          >
            <img src="/images/facebook.svg" alt="facebook" />
            <span> Facebook</span>
          </a>
          <a href="https://twitter.com/smallworldvc">
            <img src="/images/twitter.svg" alt="twitter" />
            <span> Twitter</span>
          </a>
          <img
            style={{ width: "170px", marginTop: "20px" }}
            src="/images/sw-gray.png"
            alt="smallworld-logo"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
