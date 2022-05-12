<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <Header
    class="fixed inset-x-0 top-0 h-16 shadow-md"
  />
  <main
    class="container p-4 mx-auto mt-16"
  >
    <router-view />
  </main>
</template>
