<script>
export default {
  props: {
    item: Object,
  },

  setup (props) {
    const {
      name,
      small_image: {
        url,
      },
      price_range: {
        minimum_price: {
          final_price: {
            value,
            currency,
          },
        },
      },
    } = props.item
    
    return { name, url, value, currency }
  },
}
</script>

<template>
  <article
    class="flex flex-col text-center pb-4 shadow hover:shadow-lg"
  >
    <h3
      class="order-2 grow text-lg font-bold leading-5 p-1"
    >
      {{ name }}
    </h3>
    <span
      class="order-3 shrink-0"
    >
      {{ value }} {{ currency }}
    </span>
    <img
      :src="url"
      alt=""
      class="order-1 shrink-0 h-48 object-contain object-center"
    >
  </article>
</template>
