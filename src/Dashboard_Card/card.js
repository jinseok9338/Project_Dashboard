import React from "react";
import styled from "@emotion/styled";
import ReturnGraph from "./card_components/graph";
import ChangeTimePeriod from "./card_components/change_time_period";

const ReturnCard = (data) => {
  const Card = styled.div`
    margin: 0 auto;
    background: rgb(50, 160, 160);
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
  `;

  return (
    <Card>
      <ChangeTimePeriod />
      <ReturnGraph data={data} />
    </Card>
  );
};

export default ReturnCard;
