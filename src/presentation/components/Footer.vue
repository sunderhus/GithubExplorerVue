<script setup lang="ts">
import { OhVueIcon } from 'oh-vue-icons'
defineOptions({
  name: 'FooterComponent'
})
</script>

<template>
  <div class="flex justify-center items-center h-10">
    <a
      class="group/footer text-base text-gray-600 flex"
      href="https://www.linkedin.com/in/matheus-sunderhus/"
    >
      <OhVueIcon class="text-gray-400 group-hover/footer:text-blue-600" name="fa-linkedin-in" />
      <p data-testid="author">Matheus Sunderhus</p>
    </a>
  </div>
</template>
