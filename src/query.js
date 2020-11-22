import gql from "graphql-tag";

const INTERVIEWS_QUERY = gql`
  query {
    interviews {
      id
      title
      intro
      createdAt
    }
  }
`;
export default INTERVIEWS_QUERY;
