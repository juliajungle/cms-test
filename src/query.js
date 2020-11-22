import gql from "graphql-tag";

const INTERVIEWS_QUERY = gql`
  query {
    interviews {
      id
      title
      intro
      createdAt
      date
    }
  }
`;
export default INTERVIEWS_QUERY;
