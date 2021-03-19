import Card from "../Card";
import { Row, Col, Button } from "antd";
function News() {
  return (
    <div className="container">
      <div className="news">
        <h2>COMMUNITY UPDATE</h2>
        <Row className="outter-card" justify="space-between" gutter={[25, 25]}>
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
        <Button
          size="large"
          target="_blank"
          href="https://medium.com/@smallworldvc"
          className="sw-default-btn"
        >
          Load More
        </Button>
      </div>

      <div className="news">
        <h2>KOOMPI NEWS</h2>
        <Row className="outter-card" justify="space-between" gutter={[25, 25]}>
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
        <Button
          size="large"
          target="_blank"
          href="https://medium.com/@koompi"
          className="sw-default-btn"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default News;
