import React from "react";
import ReactMarkdown from "react-markdown";

const Interview = ({ item }) => {
  const { intro, title, date } = item;
  const formattedDate = new Date(date);
  console.log(date, formattedDate.toLocaleDateString());

  return (
    <div className="col-m-4">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ReactMarkdown>{intro}</ReactMarkdown>
          {date && <p>Date: {formattedDate.toLocaleDateString()}</p>}
        </div>
      </div>
    </div>
  );
};
export default Interview;
