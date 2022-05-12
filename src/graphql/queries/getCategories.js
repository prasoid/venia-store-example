import { gql } from 'graphql-request'

export default gql`
{
  categoryList {
    children {
      name,
      url_path
    }
  }
}
`
