import { useRouter } from "next/router";
import { Row, Col, Spin } from "antd";
// import PageNotFound from "../../404";
import jobLists from "../../../data/open-page-data/jobLists.json";
function JobListing() {
  const { query } = useRouter();
  const department = query.depJobList;
  // console.log(jobLists);
  const data = jobLists.filter((job) => job.id === department);

  return (
    <div className="department-list">
      <div className="container">
        {data.length < 1 ? (
          <Row justify="center">
            <Col>
              <Spin tip="Loading..." size="large" />
            </Col>
          </Row>
        ) : (
          data.map((res) => {
            const { id, department, icon, lists } = res;
            return (
              <div key={id}>
                <h1>{department}</h1>
                <div className="line"></div>
                <div className="job-list">
                  {lists.map((list) => {
                    const { id, company, position, status } = list;
                    return (
                      <Row
                        justify="space-between"
                        key={id}
                        align="middle"
                        className="list"
                        //   gutter={[0, 20]}
                      >
                        {status ? (
                          <>
                            <Col>
                              <a href={`/open-opportunities/detail/${id}`}>
                                <h2>{position}</h2>
                              </a>
                              <p>{`${company} - ${department}`}</p>
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
                              <p>{`${company} - ${department}`}</p>
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
            );
          })
        )}
      </div>
    </div>
  );
}

export default JobListing;
