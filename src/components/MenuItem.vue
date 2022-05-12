<script>
export default {
  props: {
    to: String,
  },
}
</script>

<template>
  <li
    class="relative
      after:absolute after:top-full after:inset-x-6 after:border-b-2 after:border-slate-300 last:after:hidden
      lg:inline-block lg:border-r-2 lg:border-slate-300 lg:last:border-0
      lg:after:hidden"
  >
    <router-link
      :to="to"
      class="flex justify-center items-center tracking-widest p-2
        lg:py-1"
    >
      <slot />
    </router-link>
  </li>
</template>
