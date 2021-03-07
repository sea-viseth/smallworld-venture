import { Row, Col } from "antd";
function About() {
  return (
    <div className="about">
      <Row className="about-info" align="middle" justify="space-between">
        <Col md={{ span: 24 }} lg={{ span: 11 }} span={{ xxl: 8 }}>
          <h2>What is SmallWorld?</h2>
          <p>
            Founded in 2011 as SmallWorld Cambodia, we created a shared
            professional workspace where progressive young business minds could
            explore and pursue their aspirations while transforming ideas into
            reality.
          </p>
          <p>
            After five years of steady growth, SmallWorld Cambodia reorganized
            into SmallWorld Ventures to focus on venture building, information
            technologies, and the environment.
          </p>
          <p>
            Through equity investment partnerships, we're building a land-based
            technical, business, and academic community based on natural
            philosophy and ecologically sensitive practices.
          </p>
        </Col>
        <Col
          xs={{ span: 0 }}
          md={{ span: 0 }}
          lg={{ span: 12 }}
          span={{ xxl: 14 }}
        >
          <img src="/images/about/about-banner.png" alt="loading" />
        </Col>
      </Row>
      {/* portfolios */}
      <div className="container">
        <Row className="portfolios" justify="center" align="middle" gutter={20}>
          <Col span={24} md={{ span: 10 }}>
            <img src="/images/about/portfolios.png" alt="loading" />
          </Col>
          <Col span={24} md={{ span: 11 }}>
            <h2>PORTFOLIOS</h2>
            <p>
              We began experimenting with equity investment partnerships in
              2013, and since then we've listed a few startup teams we're proud
              to be partnered with from their inception.
            </p>

            <Row justify="space-between" align="middle" gutter={[20, 20]}>
              <Col span={7}>
                {" "}
                <img src="/images/about/cg.png" alt="loading" />
              </Col>
              <Col span={7}>
                {" "}
                <img src="/images/about/ts.png" alt="loading" />
              </Col>
              <Col span={7}>
                {" "}
                <img src="/images/about/BKB.png" alt="loading" />
              </Col>
              <Col span={7}>
                {" "}
                <img src="/images/about/sv.png" alt="loading" />
              </Col>
              <Col span={7}>
                {" "}
                <img src="/images/about/fado.png" alt="loading" />
              </Col>
              <Col span={7}>
                {" "}
                <img src="/images/about/KOOMPI.png" alt="loading" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      {/* board of director */}
      <div className="board-director">
        <div className="container">
          <h2>BOARD OF DIRECTOR</h2>
          <p>
            We're honored to have courageous and insightful business and
            community leaders to serve on our Board of Directors.
          </p>
          <Row className="directors" justify="space-around " gutter={[0, 35]}>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 7 }}
              xl={{ span: 4 }}
            >
              <img src="/images/about/mr-lin-willson.jpg" alt="loading" />
              <h3>Rithy THUL</h3>
              <p>Co-Founder & CEO </p>
              <p>SmallWorld Venture</p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 7 }}
              xl={{ span: 4 }}
            >
              <img src="/images/about/mr-lin-willson.jpg" alt="loading" />
              <h3>Mr. Willson LIN</h3>
              <p>Founder & CEO </p>
              <p>DOERS Education Group</p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 7 }}
              xl={{ span: 4 }}
            >
              <img src="/images/about/Ratana.jpg" alt="loading" />
              <h3>Ms. Ratana Phurik-Callebaut</h3>
              <p>Independent Director</p>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 7 }}
              xl={{ span: 4 }}
            >
              <img src="/images/about/mr-sila-chy.jpeg" alt="loading" />
              <h3>Mr. Sila CHY</h3>
              <p>CEO </p>
              <p>Sabay Digital Corp</p>
            </Col>

            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 7 }}
              xl={{ span: 4 }}
            >
              <img src="/images/about/mr-sen-kang.jpeg" alt="loading" />
              <h3>Mr. Sen KANG</h3>
              <p>Managing Director</p>
              <p> Fuxin Steel Building</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="partner">
          <h2>STRATEGIC PARTNER</h2>
          <p>
            We're especially pleased to have built strategic partnerships with
            forward thinking leaders in the business world.
          </p>
          <Row justify="center" gutter={40} align="midle">
            <Col
              xs={{ span: 7 }}
              sm={{ span: 6 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
            >
              <img src="/images/about/Doer.png" alt="loading" />
            </Col>
            <Col
              xs={{ span: 7 }}
              sm={{ span: 6 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
            >
              <img src="/images/about/sabay.png" alt="loading" />
            </Col>
            <Col
              xs={{ span: 7 }}
              sm={{ span: 6 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
            >
              <img xs={{ span: 7 }} src="/images/about/ISI.png" alt="loading" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;
