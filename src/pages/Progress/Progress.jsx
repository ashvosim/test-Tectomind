import React from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import classes from "./Progress.module.scss";

const ProgressBar = () => (
  <div className={classes.progress_container}>
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
    <div>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
    </div>
    <div>
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={50}
      />
      <Progress
        strokeColor={{
          from: "#108ee9",
          to: "#87d068",
        }}
        percent={10}
        status="active"
      />
      <Progress
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={100}
      />
      <Progress
        strokeColor={{
          from: "#108ee9",
          to: "#87d068",
        }}
        percent={99.9}
        status="active"
      />
    </div>
    <div>
      <Progress
        type="circle"
        strokeColor={{
          "0%": "#5ce910",
          "100%": "#c668d0",
        }}
        percent={20}
      />
      <Progress
        type="circle"
        strokeColor={{
          "0%": "#5ce910",
          "100%": "#c668d0",
        }}
        percent={100}
      />
    </div>
  </div>
);

export default ProgressBar;
