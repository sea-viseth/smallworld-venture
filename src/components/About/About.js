import { Row, Col } from "antd";
import data from "../../data/directors.json";
import partners from "../../data/partners.json";

function About() {
  return (
    <div className="about">
      <Row className="about-info " align="middle" justify="space-between">
        <Col md={{ span: 24 }} lg={{ span: 11 }} span={{ xxl: 8 }}>
          <h1>
            <span>&lt;</span> What is SmallWorld? <span>/&gt;</span>
          </h1>
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
            <h2 className="about-title">
              <span>&lt;</span> Portfolios <span>/&gt;</span>
            </h2>
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
          <h2 className="about-title">
            <span>&lt;</span> Board of Directors <span>/&gt;</span>
          </h2>
          <p>
            We're honored to have courageous and insightful business and
            community leaders to serve on our Board of Directors.
          </p>
          <Row className="directors" gutter={[24, 24]}>
            {data.map((res) => {
              const { fullName, photo, id, position } = res;
              return (
                <Col
                  sm={8}
                  md={8}
                  lg={6}
                  xl={4.5}
                  className="xs-2 sm-3 md-4 lg-5"
                  key={id}
                >
                  <div className="directors-back">
                    <div
                      style={{ backgroundImage: `url(${photo})` }}
                      className="directors-photo"
                    ></div>
                    <h3>{fullName}</h3>
                    <p>{position}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="partner">
          <h2 className="about-title">
            <span>&lt;</span> Strategic Partners <span>/&gt;</span>
          </h2>
          <p>
            We're especially pleased to have built strategic partnerships with
            forward thinking leaders in the business world.
          </p>
          <div className="partner-container">
            <Row
              justify="center"
              gutter={{ xs: 10, sm: 10, md: 40 }}
              align="midle"
            >
              {partners.map((partner) => {
                const { photo, name, id } = partner;
                return (
                  <Col xs={8} sm={8} md={6} key={id}>
                    <img src={photo} alt={name} className="img-responsive" />
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
