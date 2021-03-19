import Card from "../Card";
import { Row, Col, Button } from "antd";
function News() {
  return (
    <div className="container">
      <div className="news">
        <h2>COMMUNITY UPDATE</h2>
        <Row className="outter-card" gutter={[25, 25]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
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
        <Row className="outter-card" gutter={[25, 25]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <Card />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
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
