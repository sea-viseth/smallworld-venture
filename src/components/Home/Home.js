import React, { useState, useEffect } from "react";
import Card from "../Card";
import CardBox from "../CardBox";
import { Row, Col, Spin, Button } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

// Card for news
// CardBox for smallworld info
function Home() {
  const [community, setCommunity] = useState([]);
  const [koompi, setKoompi] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/koompi"
      )
      .then((res) => {
        setKoompi(res.data.items);
      });
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/smallworldvc"
      )
      .then((res) => {
        setCommunity(res.data.items);
      });
  }, []);
  return (
    <div className="home">
      <div className="big-header"></div>
      <Row justify="space-between" className="banner">
        <Col xs={24} sm={24} xl={14} xxl={10}>
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
              <a className="sw-default-btn load-more-btn" href="/about">
                LEARN MORE
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} xl={10} xxl={0}>
          <img
            className="space-ship"
            src="/images/spaceship.png"
            alt="space-ship"
          />
        </Col>
      </Row>
      <div className="container ">
        <Row className="outter-card-box" gutter={[24, 24]}>
          <Col md={12} xl={6}>
            <CardBox
              title="Startup Community"
              des="SmallWorld Ventures is committed to becoming the number one catalyst for funding and assisting startups in Cambodia."
              src="/images/start-up.png"
            />
          </Col>
          <Col md={12} xl={6}>
            <CardBox
              title="Seed Equity Investments"
              des="Seed Equity Investments are provided to promising startup teams with projects ranging between 5,000 to 25,000 USD."
              src="/images/venture-building.png"
            />
          </Col>
          <Col md={12} xl={6}>
            <CardBox
              title="Venture Building"
              des="Smallworld Ventures has built an internal team of technicians engaged in research and development projects with an aim to spin off new ventures."
              src="/images/investment.png"
            />
          </Col>
          <Col md={12} xl={6}>
            <CardBox
              title="Ecovillage Development"
              des="At our rural ecovillage project, we're building a hands-on learning, working, and living environment with a balance among the natural world, education, economics, and sustainable living practices."
              src="/images/reforest.png"
            />
          </Col>
        </Row>
      </div>
      <div className="idea-banner">
        <div className="container">
          <Row>
            <Col md={16} xl={13} xxl={12}>
              <h1>
                <span>&lt;</span> Have some ideas for new venture?{" "}
                <span>/&gt;</span>
              </h1>
              <p>
                We're looking for new approaches to problem solving and creating
                business.Do you have an innovative idea for a startup venture?
              </p>
              <p>
                Or maybe you have a skillset in mind that you want to develop as
                you work within our existing SmallWorld venture.
              </p>
              <p>
                We're open to discussing your own startup ideas, however
                unconventional, regardless of age, gender, or nationality.
              </p>
              <p className="send-us-message">Send us a message!</p>
              <a href="/contact" className="sw-default-btn contact-us-btn">
                CONTACT US
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="news">
          <br />
          <h2>
            <span>&lt; </span>
            COMMUNITY NEWS
            <span> /&gt;</span>
          </h2>
          <p className="p-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
            sociosqu ullamcorper, class per curabitur natoque orci lobortis
            commodo varius suscipit.
          </p>
          <Row className="outter-card" gutter={[24, 24]}>
            {community.length === 0 ? (
              <div className="loading">
                <Spin tip="Loading ..." />
              </div>
            ) : (
              community.slice(0, 4).map((community) => {
                const {
                  title,
                  description,
                  thumbnail,
                  author,
                  guid,
                } = community;
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={6} key={guid}>
                    <Card
                      title={title}
                      desc={description}
                      image={
                        thumbnail.match(/[^/]+(jpg|png|gif|jpeg)$/)
                          ? thumbnail
                          : null
                      }
                      author={author}
                    />
                  </Col>
                );
              })
            )}
          </Row>
          <Link to="/news">
            <Button size="large" className="sw-default-btn">
              Load More
            </Button>
          </Link>

          <br />
          <h2 className="about-title">
            <span>&lt;</span> KOOMPI NEWS <span>/&gt;</span>
          </h2>
          <p className="p-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
            sociosqu ullamcorper, class per curabitur natoque orci lobortis
            commodo varius suscipit.
          </p>
          <Row className="outter-card" gutter={[24, 24]}>
            {koompi.length === 0 ? (
              <div className="loading">
                <Spin tip="Loading ..." />
              </div>
            ) : (
              koompi.slice(0, 4).map((koompi) => {
                const { title, description, thumbnail, author, guid } = koompi;
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={6} key={guid}>
                    <Card
                      title={title}
                      desc={description}
                      image={
                        thumbnail.match(/[^/]+(jpg|png|gif|jpeg)$/)
                          ? thumbnail
                          : null
                      }
                      author={author}
                    />
                  </Col>
                );
              })
            )}
          </Row>
          <Link to="/news">
            <Button size="large" className="sw-default-btn">
              Load More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
