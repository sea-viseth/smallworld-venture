import { Image, Row, Col } from "antd";
function Spaces() {
  return (
    <>
      <div className="container">
        <div className="spaces">
          <Row align="middle">
            <Col xs={{ span: 24 }} md={{ span: 15 }} lg={{ span: 10 }}>
              <h1>Working community of professionals, creatives and artists</h1>
              <h3>Starting from</h3>
              <div className="price-badge">$99/month</div>
              <a href="#img-preview">
                <img
                  className="arrow-down"
                  src="/images/spaces/arrow-down.svg"
                  alt="arrow-down"
                />
              </a>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 9 }} lg={{ span: 14 }}>
              <img
                className="img-banner"
                src="/images/spaces/space-banner.png"
                alt=""
              />
            </Col>
          </Row>
          <Row className="spaces-info" justify="start" gutter={20}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
              <h2>About</h2>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
              <p>
                SmallWorld provides professional shared workspace and business
                accelerator space where freelancers, newly forming and existing
                enterprises can collaborate in a professional, productive,
                flexible and innovative workspace with established experts.
              </p>
              <p>
                SmallWorld Realty spaces are located and designed to be an
                integral hub for the Southeast Asian business and startup
                community offering the benefits you have come to expect from a
                full service provider.
              </p>
              <p>
                We are all tied together with a professional scene that gives
                you unlimited opportunities.
              </p>
            </Col>
          </Row>
          <Image.PreviewGroup>
            <Row id="img-preview" className="img-preview" gutter={[1, 1]}>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space01.jpg"
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 8 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space02.jpg"
                />
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space03.jpg"
                />
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 4 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space04.jpg"
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 6 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space05.jpg"
                />
              </Col>
              <Col xs={{ span: 8 }} sm={{ span: 8 }} md={{ span: 4 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space06.jpg"
                />
              </Col>
              <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 7 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space07.jpg"
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 7 }}>
                <Image
                  width="100%"
                  height="100%"
                  src="/images/spaces/space08.jpg"
                />
              </Col>
            </Row>
          </Image.PreviewGroup>
          <Row className="spaces-info" justify="start" gutter={20}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
              <h2>Why SmallWorld Realty? </h2>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
              <p>
                We spent approximately one-third of our day at work. What
                defines a good work space and what are the factors that
                contribute to productivity and results?
              </p>
              <p>
                SmallWorld actively explores these components to ensure that we
                can deliver the best work environment for you! SmallWorld Realty
                spaces are located in commercial areas of Phnom Penh, acting as
                a convenient headquarters for professionals and start-ups.
              </p>
              <p>
                We start with the basics. Each SmallWorld Realty spaces are
                clean, neat, and minimalist. However, we have a variety of
                different spaces for different needs and preferences. Not all
                teams want to work in cubicles and not all teams want their
                space too open. That is okay. We are here to help!
              </p>
            </Col>
          </Row>
          <Row className="spaces-info" justify="start" gutter={20}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
              <h2>SmallWorld Raintree </h2>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
              <p>
                If you are looking for a professional, corporate-style work
                space in the heart of the city, SmallWorld Raintree might be
                your best fit. We offer full-range services from high-speed
                wifi, utilities, meeting room(s), and event spaces. What’s more?
                Most people know where Raintree is so you don’t have to break a
                sweat giving directions to your clients.
              </p>
            </Col>
          </Row>
          <Row className="spaces-info" justify="start" gutter={20}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6 }}>
              <h2>SmallWorld Pteas Boran </h2>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 18 }}>
              <p>
                Boran What if your team likes your space a little
                unconventional? We’d like to introduce you to a more homely
                option. Small World Pteas Boran offers multiple array of rooms
                to choose from, each of which has its own charm. It isn’t your
                typical white-wall, glass-door kind of room and maybe that is
                why your team might like it more!
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="contact-location" align="middle">
        <Col className="contact" xs={{ span: 24 }} sm={{ span: 12 }}>
          <h2>Contact Us</h2>
          <h3>Phone</h3>
          <p>+855 (0) 17 669 881</p>
          <p>+855 (0) 17 669 881</p>
          <h3>Email</h3>
          <p>realtysmallworld@gmail.com</p>
          <h3>Location</h3>
          <p>
            RAINTREE: #299 Preah Ang Doung, Wat Phnom, Daun Penh, Phnom Penh
          </p>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} style={{ lineHeight: "0" }}>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7194322915257!2d104.91694471477136!3d11.571959791784728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c9eeaf3ed%3A0x438b132cc690d205!2sSmallworld%20Realty!5e0!3m2!1sen!2skh!4v1615121857004!5m2!1sen!2skh"
            title="google-map"
            width="100%"
            height="400"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </>
  );
}

export default Spaces;
