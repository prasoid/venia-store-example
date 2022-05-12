<script setup>
import Menu from '@/components/Menu.vue'
</script>

<template>
  <header
    class="border-b-2 border-slate-300 bg-gradient-to-r from-indigo-800 to-indigo-400 text-white px-4"
  >
    <div
      class="container flex justify-between items-center h-full mx-auto"
    >
      <h1
        class="text-3xl italic font-extralight first-letter:font-bold first-letter:text-indigo-100"
      >
        Venia
      </h1>
      <Menu />
    </div>
  </header>
</template>
