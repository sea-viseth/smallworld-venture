import Card from "../Card";
import CardBox from "../CardBox";
import { Row, Col } from "antd";
// Card for news
// CardBox for smallworld info
function Home() {
  return (
    <div className="home">
      <div className="big-header"></div>
      <Row justify="space-between" className="banner">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          xl={{ span: 14 }}
          xxl={{ span: 10 }}
        >
          <Row gutter={[0, 20]}>
            <Col>
              <h1>
                <span>&lt;</span>
                Homegrown Startup Community
                <span>/&gt;</span>
              </h1>
            </Col>
            <Col>
              <p>
                We began in 2011 by providing a collaborative workspace
                environment for entrepreneurs, and then quickly moved forward
                raising investment capital to fund new startup projects.
              </p>
            </Col>
            <Col>
              <p>
                With a variety of research and development projects in motion
                today, we're involved in startup venture building through
                community supported seed equity investments, together with rural
                ecovillage development and long-term land management.
              </p>
            </Col>
            <Col>
              <a className="learn-more-btn" href="/about">
                LEARN MORE
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          xl={{ span: 10 }}
          xxl={{ span: 0 }}
        >
          <img
            className="space-ship"
            src="/images/spaceship.png"
            alt="space-ship"
          />
        </Col>
      </Row>
      <div className="container">
        <Row className="outter-card-box" gutter={[20, 20]}>
          <Col md={{ span: 12 }} xl={{ span: 6 }}>
            <CardBox
              title="Startup Community"
              des="SmallWorld Ventures is committed to becoming the number one catalyst for funding and assisting startups in Cambodia."
              src="/images/start-up.png"
            />
          </Col>
          <Col md={{ span: 12 }} xl={{ span: 6 }}>
            <CardBox
              title="Seed Equity Investments"
              des="Seed Equity Investments are provided to promising startup teams with projects ranging between 5,000 to 25,000 USD."
              src="/images/venture-building.png"
            />
          </Col>
          <Col md={{ span: 12 }} xl={{ span: 6 }}>
            <CardBox
              title="Venture Building"
              des="Smallworld Ventures has built an internal team of technicians engaged in research and development projects with an aim to spin off new ventures."
              src="/images/investment.png"
            />
          </Col>
          <Col md={{ span: 12 }} xl={{ span: 6 }}>
            <CardBox
              title="Ecovillage Development"
              des="At our rural ecovillage project, we're building a hands-on learning, working, and living environment with a balance among the natural world, education, economics, and sustainable living practices."
              src="/images/reforest.png"
            />
          </Col>
        </Row>
      </div>
      <Row className="idea-banner">
        <Col md={{ span: 16 }} xl={{ span: 12 }}>
          <h1>Have some ideas for new venture?</h1>
          <p>
            We're looking for new approaches to problem solving and creating
            business.Do you have an innovative idea for a startup venture?
          </p>
          <p>
            Or maybe you have a skillset in mind that you want to develop as you
            work within our existing SmallWorld venture.
          </p>
          <p>
            We're open to discussing your own startup ideas, however
            unconventional, regardless of age, gender, or nationality.
          </p>
          <p>Send us a message!</p>
          <a href="/contact" className="contact-us-btn">
            CONTACT US
          </a>
        </Col>
      </Row>
      <div className="container">
        <div className="news">
          <h2>COMMUNITY NEWS</h2>
          <Row
            className="outter-card"
            justify="space-between"
            gutter={[25, 25]}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
          </Row>
          <h2>KOOMPI NEWS</h2>
          <Row
            className="outter-card"
            justify="space-between"
            gutter={[25, 25]}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <Card />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
