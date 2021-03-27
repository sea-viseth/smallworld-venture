import { Row, Col } from "antd";

function koompi() {
  const teams = [
    {
      id: 1,
      icon: "/images/open-opportunities/developer.svg",
      role: "Web Developer",
    },
    {
      id: 2,
      icon: "/images/open-opportunities/developer.svg",
      role: "Web Developer",
    },
    {
      id: 3,
      icon: "/images/open-opportunities/developer.svg",
      role: "Web Developer",
    },
    {
      id: 4,
      icon: "/images/open-opportunities/developer.svg",
      role: "Web Developer",
    },
  ];
  return (
    <div className="com-detail">
      <div className="container">
        <Row align="middle" justify="space-between">
          <Col xl={14} className="about-com">
            <h1>
              <span>&lt;</span>
              KOOMPI
              <span>/&gt;</span>
            </h1>
            <p>JOIN OUR TEAM</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum
              suscipit quis lectus quam elementum volutpat. Ac potenti amet,
              cras magna. Lacus amet consectetur condimentum turpis sed sed at
              commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In dictum suscipit quis lectus quam elementum volutpat. Ac potenti
              amet, cras magna. Lacus amet consectetur condimentum turpis sed
              sed at commodo.
            </p>
            <div className="line"></div>
          </Col>
          <Col xl={6}>
            <img src="/images/open-opportunities/companyDetail.svg" alt="" />
          </Col>
        </Row>
        <h2 className="center">
          <span>&lt; </span>
          OUR TEAM
          <span> /&gt;</span>
        </h2>
        <Row align="middle" gutter={[20, 20]}>
          {teams.map((team) => {
            const { id, icon, role } = team;
            return (
              <Col xl={8} key={id}>
                <Row align="middle" className="team">
                  <Col xl={5}>
                    <img src={icon} alt={role} />
                  </Col>
                  <Col>
                    <h3>{role}</h3>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default koompi;
