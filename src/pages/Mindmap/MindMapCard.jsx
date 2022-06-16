import React from "react";
import { Card, Progress } from "antd";

function MindMapCard({ title, percent, showInfo = true, status = "default" }) {
  return (
    <Card title={title} style={{ width: 200 }}>
      <Progress percent={percent} showInfo={showInfo} status={status} />
    </Card>
  );
}

export default MindMapCard;
