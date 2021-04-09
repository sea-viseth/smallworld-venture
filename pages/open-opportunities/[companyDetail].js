import { Row, Col } from "antd";
import { useRouter } from "next/router";
import companies from "../../data/open-page-data/companies.json";
import jobLists from "../../data/open-page-data/jobLists.json";

//companies is for company's logo, name and description on th top
//jobLists is all data of opporunnities
function CompanyDetail() {
  const { query } = useRouter();
  const name = query.companyDetail;
  //   console.log(name);
  const data = companies.filter((com) => com.name.toLowerCase() === name);
  //   console.log(data);
  const opportunities = jobLists.map((job) =>
    job.lists.filter((res) => res.company.toLowerCase() === name)
  );
  // console.log(opportunities);

  return (
    <div className="com-detail">
      <div className="container">
        {data.map((com, i) => {
          return (
            <Row key={i} align="middle" justify="space-between">
              <Col xl={14} className="about-com">
                <h1>
                  <span>&lt;</span>
                  {com.name.toUpperCase()}
                  <span>/&gt;</span>
                </h1>
                <p>JOIN OUR TEAM</p>
                <p>{com.des}</p>
                <div className="line"></div>
              </Col>
              <Col xl={6}>
                <img src={com.logo} alt={`${com.name} logo`} />
              </Col>
            </Row>
          );
        })}

        <div className="our-team">
          <h2>
            <span>&lt; </span>
            OUR TEAM
            <span> /&gt;</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            nobis praesentium molestiae quae architecto quod, inventore dolores
            veniam nihil molestias tempora ratione adipisci veritatis quos,
            quidem dicta odit error delectus.
          </p>
        </div>
        <div className="job-list">
          {opportunities.map((res) =>
            res.map((data) => {
              const { id, company, position, status, responsibilities } = data;
              return (
                <Row
                  key={id}
                  justify="space-between"
                  key={id}
                  align="middle"
                  className="list"
                >
                  <Col>
                    <a href={`/open-opportunities/detail/${id}`}>
                      <h2>{position}</h2>
                    </a>
                    <p>{`${company}`}</p>
                  </Col>
                  <Col>
                    {status ? (
                      <a
                        href={`/open-opportunities/detail/${id}`}
                        className="available"
                      >
                        Detail
                      </a>
                    ) : (
                      <a href="#" className="close">
                        Close
                      </a>
                    )}
                  </Col>
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
