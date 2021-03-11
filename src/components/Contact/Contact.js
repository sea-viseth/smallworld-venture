import { Row, Col, Form, Input, Button } from "antd";
function Contact() {
  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="container">
        <div className="contact-page">
          <Row gutter={50}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <h2>Inquiries Request</h2>
              <Form
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item name="name" label="Full Name">
                  <Input />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
                <Form.Item name="message" label="Message">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="submit-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col
              className="office-info"
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
            >
              <h2>Our Office</h2>
              <Row align="middle">
                <Col className="info-icon" flex="40px">
                  <img src="/images/contact/address.png" alt="adress" />
                </Col>
                <Col span={18}>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/9qBKccPdT81iKQYa9"
                    rel="noreferrer"
                  >
                    #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
                  </a>
                </Col>
              </Row>
              <Row align="middle">
                <Col className="info-icon" flex="35px">
                  <img src="/images/contact/email.png" alt="email" />
                </Col>
                <Col>
                  <a href="mailto:smallworldventure@gmail.com">
                    smallworldventure@gmail.com
                  </a>
                </Col>
              </Row>
              <Row align="middle">
                <Col className="info-icon" flex="35px">
                  <img src="/images/contact/telegram.png" alt="" />
                </Col>
                <Col>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://t.me/smallworldventure"
                  >
                    t.me/smallworldventure
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Row className="smallworld" align="middle">
        <Col
          className="info"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <h2>SmallWorld</h2>
          <p>
            We look forward to welcome you at any working hour. Though, most of
            the time there are someone at SmallWorld. There are several startups
            in the same building, so make sure you know who you are looking for.
            We will surely direct you to the right person!
          </p>
          <p>
            Look at the map, 2F-01, Raintree, #299 Preah Ang Duong, Sangkat Wat
            Phnom, Khan Daun Penh! Come walk around and feel it yourself.
          </p>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          style={{ lineHeight: "0" }}
        >
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7194322915257!2d104.91694471477136!3d11.571959791784728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513c9eeaf3ed%3A0x438b132cc690d205!2sSmallworld%20Realty!5e0!3m2!1sen!2skh!4v1615121857004!5m2!1sen!2skh"
            title="google-map"
            width="100%"
            height="400"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </>
  );
}

export default Contact;
