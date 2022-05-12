import { gql } from 'graphql-request'

export default gql`
  query getCategoryProducts($slug: String!) {
    categoryList(filters: {
      url_path: { eq: $slug }
    }) {
      uid,
      name,
      children {
        name,
        url_path
      },
      products {
        total_count,
        items {
          uid,
          name,
          small_image {
            url
          },
          price_range {
            minimum_price {
              final_price {
                value,
                currency
              }
            }
          }
        }
      }
    }
  }
`
