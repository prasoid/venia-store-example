import { gql } from 'graphql-request'

export default gql`
  query getProducts($categoryUid: String!, $page: Int!) {
    products(
      filter: {
        category_uid: { eq: $categoryUid }
      },
      currentPage: $page
    ) {
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
`
