import { Typography } from "antd";
import React from "react";
const { Paragraph } = Typography;
function Card() {
  return (
    <div className="card">
      <img src="/images/news/cu02.jpeg" alt="cummunity upadate" />
      <div className="card-des">
        <h3>Plan your next adventure with Tursaknak!</h3>
        <Paragraph ellipsis={{ rows: 3 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          alias, ipsa sapiente dicta officiis exercitationem atque nisi
          perferendis ducimus magni rem sit, quia eum commodi. Voluptatibus
          earum natus aliquid voluptatem?
        </Paragraph>
        <span className="name-badge">Users One</span>
      </div>
    </div>
  );
}

export default Card;
