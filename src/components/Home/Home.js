import { Row, Col } from "antd";
function Home() {
  return (
    <div className="home">
      <Row className="home-banner">
        <Col flex="590px">
          <h1>
            <span>&lt;</span>
            Homegrown Startup Community
            <span>/&gt;</span>
          </h1>
        </Col>
      </Row>
     </div>
  );
}

export default Home;
