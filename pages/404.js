import { Row, Col } from "antd";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="container">
        <Row justify="center" gutter={[0, 30]}>
          <Col span={10}>
            <img src="/images/404.svg" alt="404" />
          </Col>
          <Col span={24}>
            <h1>Page Not Found</h1>
          </Col>
          <Col span={24}>
            <a href="/" className="sw-default-btn contact-us-btn">
              <span>&gt;</span> Home Page
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PageNotFound;
