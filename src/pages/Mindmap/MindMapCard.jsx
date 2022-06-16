import React from "react";
import { Input } from "antd";
import { Card, Progress } from "antd";

function MindMapCard({
  id,
  title,
  percent,
  showInfo = true,
  status = "default",
}) {
  return (
    <Card
      id={id}
      title={<Input className="card-input" defaultValue={title} />}
      style={{ width: 200 }}
    >
      <Progress percent={percent} showInfo={showInfo} status={status} />
    </Card>
  );
}

export default MindMapCard;
