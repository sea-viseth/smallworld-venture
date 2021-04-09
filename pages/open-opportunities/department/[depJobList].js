import { useRouter } from "next/router";
import { Row, Col, Spin } from "antd";
// import PageNotFound from "../../404";
import jobLists from "../../../data/open-page-data/jobLists.json";
function JobListing() {
  const { query } = useRouter();
  const department = query.depJobList;
  // console.log(jobLists);
  const data = jobLists.filter((job) => job.id === department);
  // const data = [];
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
                    return (
                      <Row
                        justify="space-between"
                        key={list.id}
                        align="middle"
                        className="list"
                        //   gutter={[0, 20]}
                      >
                        <Col>
                          <a href={`/open-opportunities/detail/${list.id}`}>
                            <h2>{list.position}</h2>
                          </a>
                          <p>{`${list.company} - ${department}`}</p>
                        </Col>
                        <Col>
                          {list.status ? (
                            <a
                              href={`/open-opportunities/detail/${list.id}`}
                              className="available"
                            >
                              Detail
                            </a>
                          ) : (
                            <p className="close">Close</p>
                          )}
                        </Col>
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
