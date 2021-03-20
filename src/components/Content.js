import { Row, Col } from "antd";

// In content props array have [title,des,img,desOrder,imgOrder]
function Content({ content }) {
  return (
    <div className="works-content">
      <Row align="middle" justify="space-between">
        <Col
          sm={{ span: 24, order: 1 }}
          md={{ span: 12, order: content.desOrder }}
        >
          {content.title.length > 1 ? (
            content.title.map((title, i) => (
              <>
                <h2 className="about-title-content">
                  <span>&lt;</span> {title} <span>/&gt;</span>
                </h2>
                {content.des[i].split(".").map((des, n) => (
                  <p>
                    {n === content.des[i].split(".").length - 1
                      ? ""
                      : des + "."}
                  </p>
                ))}
              </>
            ))
          ) : (
            <>
              <h2 className="about-title-content">
                <span>&lt;</span> {content.title} <span>/&gt;</span>
              </h2>
              {content.des.split(".").map((des, i) => (
                <p>
                  {i === content.des.split(".").length - 1 ? "" : des + "."}
                </p>
              ))}
            </>
          )}
        </Col>
        <Col
          sm={{ span: 24, order: 2 }}
          md={{ span: 10, order: content.imgOrder }}
        >
          {" "}
          <div className="content-img-wrapper">
            <img src={content.img} alt="Loading" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
