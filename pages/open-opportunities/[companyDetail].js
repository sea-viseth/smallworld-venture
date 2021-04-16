import { Row, Col } from "antd";
import { useRouter } from "next/router";

//companies is for company's logo, name and description
import companies from "../../data/open-page-data/companies.json";
//jobList is all data of opportunities
import jobList from "../../data/open-page-data/jobList.json";

function CompanyDetail() {
  // ==== get company name from url
  const { query } = useRouter();
  const companyName = query.companyDetail;

  // === get company info ===
  const companyInfo = companies.filter(
    (com) => com.name.toLowerCase() === companyName
  );

  //get list of opportunities from specific company
  const list = jobList.filter(
    (job) => job.company.toLowerCase() === companyName
  );
  console.log(list);

  return (
    <div className="com-detail">
      <div className="container">
        {companyInfo.map((com, i) => {
          const { name, des, logo, ourTeam } = com;
          return (
            <div key={i}>
              <Row align="middle" justify="space-between">
                <Col xl={14} className="about-com">
                  <h1>
                    <span>&lt;</span>
                    {name.toUpperCase()}
                    <span>/&gt;</span>
                  </h1>
                  <p>JOIN OUR TEAM</p>
                  <p>{des}</p>
                  <div className="line"></div>
                </Col>
                <Col xl={6}>
                  <img src={logo} alt={`${name} logo`} />
                </Col>
              </Row>
              <div className="our-team">
                <h2>
                  <span>&lt; </span>
                  OUR TEAM
                  <span> /&gt;</span>
                </h2>
                <p>{ourTeam}</p>
              </div>
            </div>
          );
        })}
        <div className="job-list">
          {list.map((res) => {
            const { id, company, position, status } = res;
            return (
              <Row
                key={id}
                justify="space-between"
                key={id}
                align="middle"
                className="list"
              >
                {status ? (
                  <>
                    <Col>
                      <a href={`/open-opportunities/detail/${id}`}>
                        <h2>{position}</h2>
                      </a>
                      <p>{`${company}`}</p>
                    </Col>
                    <Col>
                      <a
                        href={`/open-opportunities/detail/${id}`}
                        className="available"
                      >
                        Detail
                      </a>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col>
                      <a href="#">
                        <h2>{position}</h2>
                      </a>
                      <p>{`${company}`}</p>
                    </Col>
                    <Col>
                      <a href="#" className="close">
                        Close
                      </a>
                    </Col>
                  </>
                )}
              </Row>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default CompanyDetail;
