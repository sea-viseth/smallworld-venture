import { useRouter } from "next/router";
import jobLists from "../../../data/open-page-data/jobLists.json";
import { Timeline } from "antd";
function JobDetail() {
  const { query } = useRouter();

  const id = query.jobDetail;
  // console.log(id);

  const detail = jobLists.map((job) =>
    job.lists.filter((res) => res.id.toString() === id)
  );
  // console.log(detail);
  return (
    <div className="job-detail">
      <div className="container">
        {detail.map((res) =>
          res.map((data) => {
            const {
              id,
              company,
              position,
              responsibilities,
              requirements,
              conditions,
            } = data;
            return (
              <div key={id}>
                <h1>{`${position} - ${company.toUpperCase()}`}</h1>
                <div className="line"></div>
                <h2>Responsibilities</h2>
                <Timeline>
                  {responsibilities.map((resp, i) => {
                    return (
                      <Timeline.Item key={i}>
                        <p>{resp}</p>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
                <h2>Requirements</h2>
                <Timeline>
                  {requirements.map((resp, i) => {
                    return (
                      <Timeline.Item key={i}>
                        <p>{resp}</p>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
                <h2>Conditions</h2>
                <Timeline>
                  {conditions.map((resp, i) => {
                    return (
                      <Timeline.Item key={i}>
                        <p>{resp}</p>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </div>
            );
          })
        )}
        <h2>Contact Us:</h2>
        <img
          className="arrow-down"
          src="/images/spaces/arrow-down.svg"
          alt="arrow down svg"
        />
        <br />
        <a href="/contact" className="sw-default-btn load-more-btn">
          Contact Us Page
        </a>
        <a
          style={{ marginLeft: "20px" }}
          href="/"
          className="sw-default-btn load-more-btn"
        >
          Home Page
        </a>
      </div>
    </div>
  );
}

export default JobDetail;
