<script>
import { toRefs, computed } from 'vue'
import PaginatorButton from '@/components/PaginatorButton.vue'

export default {
  components: {
    PaginatorButton,
  },

  props: {
    pagesCount: Number,
    currentPage: Number,
  },

  emits: ['update:currentPage'],

  setup (props) {
    const { currentPage } = toRefs(props)

    const previousPage = computed(() => currentPage.value - 1)
    const nextPage = computed(() => currentPage.value + 1)

    return { previousPage, nextPage }
  },
}
</script>

<template>
  <nav
    class="flex justify-center"
  >
    <PaginatorButton
      v-if="currentPage > 1"
      title="Go to the first page"
      @click="$emit('update:currentPage', 1)"
    >
      1
    </PaginatorButton>
    <PaginatorButton
      v-if="previousPage > 1"
      title="Go to previous page"
      @click="$emit('update:currentPage', previousPage)"
    >
      {{ previousPage }}
    </PaginatorButton>
    <span
      class="flex justify-center items-center w-10 h-10 border-2 border-slate-300"
    >
      {{ currentPage }}
    </span>
    <PaginatorButton
      v-if="nextPage < pagesCount"
      title="Go to next page"
      @click="$emit('update:currentPage', nextPage)"
    >
      {{ nextPage }}
    </PaginatorButton>
    <PaginatorButton
      v-if="currentPage < pagesCount"
      title="Go to the last page"
      @click="$emit('update:currentPage', pagesCount)"
    >
      {{ pagesCount }}
    </PaginatorButton>
  </nav>
</template>