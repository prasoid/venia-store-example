<script>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import MenuItem from '@/components/MenuItem.vue'

export default {
  components: {
    MenuItem,
  },

  setup () {
    const route = useRoute()
    const store = useStore()

    const categories = computed(() => store.getters.getCategories)
    store.dispatch('fetchMenuCategories')

    const isMenuOpened = ref(false)
    const toggleMenuOpen = () => {
      isMenuOpened.value = !isMenuOpened.value
    }

    watch(route, () => {
      isMenuOpened.value = false
    })

    return { categories, isMenuOpened, toggleMenuOpen }
  },
}
</script>

<template>
  <button
    type="button"
    class="relative w-12 h-10 lg:hidden"
    @click="toggleMenuOpen"
  >
    <span
      v-if="isMenuOpened"
      class="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-45 h-0.5 bg-current rounded-full
        after:absolute after:inset-0 after:rotate-90 after:bg-current after:rounded-full"
    />
    <span
      v-else
      class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-current rounded-full
        before:absolute before:inset-x-0 before:top-3 before:h-0.5 before:bg-current before:rounded-full
        after:absolute after:inset-x-0 after:bottom-3 after:h-0.5 after:bg-current after:rounded-full"
    />
  </button>

  <nav
    :class="[
      { 'hidden': !isMenuOpened },
      `absolute inset-x-0 top-16 bg-slate-100 border-b-2 text-slate-700 border-slate-300
      lg:block lg:static lg:bg-transparent lg:text-inherit lg:border-0`,
    ]"
  >
    <ul
      v-if="categories.length"
    >
      <MenuItem
        to="/"
      >
        Home
      </MenuItem>
      <MenuItem
        v-for="(category, index) in categories"
        :key="index"
        :to="`/category/${category.url_path}`"
      >
        {{ category.name }}
      </MenuItem>
      <MenuItem
        to="/contacts"
      >
        Contacts
      </MenuItem>
    </ul>
    <template
      v-else
    >
      Loading...
    </template>
  </nav>
</template>
