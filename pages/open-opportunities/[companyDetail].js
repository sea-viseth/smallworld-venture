import { Row, Col } from "antd";
import { useRouter } from "next/router";

//companies is for company's logo, name and description
import companies from "../../data/open-page-data/companies.json";
//jobLists is all data of opporunnities
import jobLists from "../../data/open-page-data/jobLists.json";

function CompanyDetail() {
  const { query } = useRouter();
  const companyName = query.companyDetail;
  //   console.log(companyName);
  const companyInfo = companies.filter(
    (com) => com.name.toLowerCase() === companyName
  );
  //   console.log(data);
  const opportunities = jobLists.map((job) =>
    job.lists.filter((res) => res.company.toLowerCase() === companyName)
  );
  // console.log(opportunities);

  return (
    <div className="com-detail">
      <div className="container">
        {companyInfo.map((com, i) => {
          const { name, des, logo, ourTeam } = com;
          return (
            <>
              <Row key={i} align="middle" justify="space-between">
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
            </>
          );
        })}

        <div className="job-list">
          {opportunities.map((res) =>
            res.map((data) => {
              const { id, company, position, status } = data;
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
            })
          )}
        </div>
      </div>
    </div>
  );
}
export default CompanyDetail;
