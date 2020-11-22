import React from "react";
import ReactMarkdown from "react-markdown";

const Interview = (props) => {
  return (
    <div className="col-m-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <ReactMarkdown>{props.item.intro}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default Interview;
