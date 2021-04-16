import { useRouter } from "next/router";
import jobList from "../../../data/open-page-data/jobList.json";
import { Timeline } from "antd";

function JobDetail() {
  // === get id  ===
  const { query } = useRouter();
  const id = query.jobDetail;

  // === get an opportunity by url id ===
  const detail = jobList.filter((job) => job.id.toString() === id);

  return (
    <div className="job-detail">
      <div className="container">
        {detail.map((res) => {
          const {
            id,
            company,
            position,
            responsibilities,
            requirements,
            conditions,
          } = res;
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
        })}
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
