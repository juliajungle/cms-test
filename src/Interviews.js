import React, { Component } from "react";
import { Query } from "react-apollo";
import INTERVIEWS_QUERY from "./query";
import Interview from "./Interview";

class Interviews extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query query={INTERVIEWS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching interviews.....</div>;
          if (error) return <div>Error fetching data</div>;

          const items = data.interviews;
          return (
            <div>
              <div className="container mt-4">
                <div className="row">
                  {items.map((item) => (
                    <Interview key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Interviews;
