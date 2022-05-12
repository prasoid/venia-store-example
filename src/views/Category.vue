<script>
import { toRefs, ref, shallowRef, watchEffect } from 'vue'
import { getCategoryProducts } from '@/graphql'
import Subcategories from '@/components/Subcategories.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    Subcategories,
    ProductList,
  },

  props: {
    slug: String,
  },

  setup (props) {
    const { slug } = toRefs(props)

    const isRequestError = ref(false)
    const categoryUid = ref('')
    const categoryName = ref('')
    const subcategories = shallowRef([])
    const categoryPproducts = shallowRef(null)

    const resetData = () => {
      isRequestError.value = false
      categoryUid.value = ''
      categoryName.value = ''
      subcategories.value = []
      categoryPproducts.value = null
    }

    const handleCategoryProductsData = ({ uid, name, children, products }) => {
      categoryUid.value = uid
      categoryName.value = name
      subcategories.value = children
      categoryPproducts.value = products
    }

    watchEffect(async () => {
      try {
        resetData()
        handleCategoryProductsData(await getCategoryProducts(slug.value))
      } catch (e) {
        isRequestError.value = true
        // @todo: Handle error better, trigger red alert
        console.error(e)
      }
    })

    return {
      isRequestError,
      categoryUid,
      categoryName,
      subcategories,
      categoryPproducts,
    }
  },
}
</script>

<template>
  <template
    v-if="!isRequestError"
  >
    <h2
      class="inline-block box-decoration-clone bg-gradient-to-r from-indigo-800 to-indigo-400 text-white font-bold text-xl tracking-widest p-2"
    >
      {{ categoryName || '...' }}
    </h2>
    <Subcategories
      v-if="subcategories.length"
      :list="subcategories"
    />
    <ProductList
      v-if="categoryPproducts"
      :list="categoryPproducts.items"
      :total-count="categoryPproducts.total_count"
      :category-uid="categoryUid"
    />
  </template>
  <div
    v-else
  >
    Oops!
  </div>
</template>
