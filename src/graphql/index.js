import { GraphQLClient } from 'graphql-request'

import _queryGetCategories from './queries/getCategories'
import _queryGetCategoryProducts from './queries/getCategoryProducts'
import _queryGetProducts from './queries/getProducts'

const _client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_ENDPOINT)

const getCategories = async () => (await _client.request(_queryGetCategories)).categoryList[0].children
const getCategoryProducts = async (slug) => (await _client.request(_queryGetCategoryProducts, { slug })).categoryList[0]
const getProducts = async (categoryUid, page) => (await _client.request(_queryGetProducts, { categoryUid, page })).products.items

export {
  getCategories,
  getCategoryProducts,
  getProducts,
}
