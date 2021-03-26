import { Row, Col } from "antd";
import Link from "next/link";
function index() {
  const values = [
    "Be real and authentic",
    "Always do your best",
    "Stop trying to please others",
    "Don't define yourself at your worst",
    "Speak your mind directly, not through others",
    "Don't gossip or show malice",
    "Work as if your life depends on it",
    "See yourself as a company owner",
  ];
  const workWithUs = [
    {
      id: 1,
      title: "Meaningful Work",
      img: "/images/open-opportunities/work.svg",
      des:
        "Our goal is to have fun, experiment, create, to do exceptional work, build the best products, give proper attention to detail, treat people right, tell the truth.",
      imgOrder: 1,
      desOrder: 2,
    },
    {
      id: 2,
      title: "Good People",
      img: "/images/open-opportunities/work.svg",
      des:
        "Our goal is to have fun, experiment, create, to do exceptional work, build the best products, give proper attention to detail, treat people right, tell the truth.",
      imgOrder: 2,
      desOrder: 1,
    },
    {
      id: 3,
      title: "Something",
      img: "/images/open-opportunities/work.svg",
      des:
        "Our goal is to have fun, experiment, create, to do exceptional work, build the best products, give proper attention to detail, treat people right, tell the truth.",
      imgOrder: 1,
      desOrder: 2,
    },
  ];
  const recruiting = [
    "New team members are recruited through a trial apprenticeship program where the office is open to hangout, meet with different team members, and to test the general atmosphere. We only hire those who show strong motivation to collaborate with a team, or wish to build their own team.",
    "We don’t hire managers to direct others, everyone works together as self-directed team players. We want new recruits to tell us what we can do better, and to tell us how they feel they can contribute.",
    "Team members are hired for a lifetime of service, meaning that we will support and applaud your success even if you step out on your own business venture. We want all our team members to be able to collaborate as entrepreneurs while we extend our efforts out into the community.",
  ];
  const companies = [
    {
      logo: "/images/open-opportunities/koompi.png",
      name: "Koompi",
    },
    {
      logo: "/images/open-opportunities/grood.png",
      name: "Grood",
    },

    {
      logo: "/images/open-opportunities/selendra.png",
      name: "Selendra",
    },
    {
      logo: "/images/open-opportunities/va.png",
      name: "Vitaminair",
    },
    {
      logo: "/images/open-opportunities/selendra.png",
      name: "Selendra",
    },
  ];
  return (
    <div className="open">
      <Row align="middle" justify="space-between" className="open-banner">
        <Col xl={14}>
          <Row gutter={[0, 20]}>
            <Col>
              <h1>
                <span>&lt;</span>
                Open-Opportunities
                <span>/&gt;</span>
              </h1>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                dictum suscipit quis lectus quam elementum volutpat. Ac potenti
                ameutpat. Ac potenti amet, cras magna. Lacus amet consectetur
                condimentum turpis sed sed at commodo.{" "}
              </p>
            </Col>
            <Col>
              <a className="sw-default-btn load-more-btn">View Oppening</a>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} xl={5}>
          <img
            src="/images/open-opportunities/banner-image.svg"
            alt="team work"
          />
        </Col>
      </Row>
      <div className="about-smallworld container">
        <h2>
          <span>&lt; </span>
          VALUES
          <span> /&gt;</span>
        </h2>
        <Row gutter={[10, 5]}>
          {values.map((value, i) => (
            <Col key={i}>
              <p className="value">{value}</p>
            </Col>
          ))}
        </Row>
        <Row align="middle" justify="space-between">
          <Col xl={16}>
            <h2>
              <span>&lt; </span>
              OUR GOAL AND VISION
              <span> /&gt;</span>
            </h2>
            <p>
              Our goal is to have fun, experiment, create, to do exceptional
              work, build the best products, give proper attention to detail,
              treat people right, tell the truth, never stop learning, and to
              have a positive impact on the future. We want to inspire you to do
              your best, dare you to achieve your dream, and encourage you to be
              yourself.
            </p>
          </Col>
          <Col xl={5}>
            <img
              src="/images/open-opportunities/goal-vision.svg"
              alt="goal and vision"
            />
          </Col>
        </Row>
        <Row gutter={[30]}>
          <Col>
            <div className="employees-brands">
              <h1>100+</h1>
              <h1>Employees</h1>
            </div>
          </Col>
          <Col>
            <div className="employees-brands">
              <h1>11</h1>
              <h1>Brands</h1>
            </div>
          </Col>
        </Row>
        <h2 className="center">
          <span>&lt; </span>
          WORK WITH US
          <span> /&gt;</span>
        </h2>
        <Row gutter={[0, 30]}>
          {workWithUs.map((work) => (
            <Col key={work.id}>
              <Row
                align="middle"
                justify="space-between"
                className="work-with-us"
              >
                <Col order={work.imgOrder} xl={3}>
                  <img src={work.img} alt="work" />
                </Col>
                <Col order={work.desOrder} xl={19}>
                  <h3>{work.title}</h3>
                  <p>{work.des}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
        <h2 className="center">
          <span>&lt; </span>
          RECRUITING TEAM MEMBER
          <span> /&gt;</span>
        </h2>
        <Row gutter={[40, 20]}>
          {recruiting.map((recruit, i) => (
            <Col key={i} xl={8}>
              <div className="recruit-card">
                <p>
                  {" "}
                  <span style={{ fontSize: "45px" }}>{`${i + 1}. `}</span>
                  {recruit}
                </p>
              </div>
            </Col>
          ))}
        </Row>
        <h2 className="center">
          <span>&lt; </span>
          CHOOSE YOUR COMPANY
          <span> /&gt;</span>
        </h2>
        <Row
          className="company"
          justify="center"
          align="middle"
          gutter={[20, 20]}
        >
          {companies.map((com, i) => (
            <Col key={i} xl={4}>
              <div>
                <img src={com.logo} alt={com.name} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default index;
