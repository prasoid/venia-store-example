<script>
export default {
  props: {
    list: Array,
  },
}
</script>

<template>
  <h3
    class="my-3"
  >
    Deeper into the rabbit hole…
  </h3>

  <nav
    class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
  >
    <ul
      v-for="(category, index) in list"
      :key="index"
    >
      <router-link
        :to="`/category/${category.url_path}`"
        class="block px-3 py-1 shadow-md hover:shadow-lg"
      >
        {{ category.name }}
      </router-link>
    </ul>
  </nav>
</template>
