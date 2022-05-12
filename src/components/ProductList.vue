<script>
import { ref, shallowRef, watch } from 'vue'
import { getProducts } from '@/graphql'
import Product from '@/components/Product.vue'
import Paginator from '@/components/Paginator.vue'

export default {
  components: {
    Product,
    Paginator,
  },

  props: {
    list: Array,
    totalCount: Number,
    categoryUid: String,
  },

  setup (props) {
    const { categoryUid, totalCount, list } = props
    const products = shallowRef(list)

    const currentPage = ref(1)
    const pagesCount = Math.ceil(totalCount / products.value.length)

    watch(currentPage, async (newPage) => {
      products.value = await getProducts(categoryUid, newPage)
    })

    return { products, totalCount, currentPage, pagesCount }
  },
}
</script>

<template>
  <div
    class="grid gap-4 grid-cols-2 mt-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
  >
    <Product
      v-for="product in products"
      :key="product.uid"
      :item="product"
    />
  </div>
  <Paginator
    v-model:currentPage="currentPage"
    :pages-count="pagesCount"
    class="mt-4"
  />
</template>
