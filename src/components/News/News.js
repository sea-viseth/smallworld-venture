import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Row, Col, Spin } from "antd";
import axios from "axios";

function News() {
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
        console.log(res.data);
        setCommunity(res.data.items);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="news">
        <h2 className="about-title">
          <span>&lt;</span> COMMUNITY UPDATE <span>/&gt;</span>
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
            community.map((community) => {
              const { title, description, thumbnail, author, guid } = community;
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

        {/* <Button
          size="large"
          target="_blank"
          href="https://medium.com/@smallworldvc"
          className="sw-default-btn"
        >
          Load More
        </Button> */}
      </div>

      <div className="news">
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
            koompi.map((koompi) => {
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

        {/* <Button
          size="large"
          target="_blank"
          href="https://medium.com/@koompi"
          className="sw-default-btn"
        >
          Load More
        </Button> */}
      </div>
    </div>
  );
}

export default News;
