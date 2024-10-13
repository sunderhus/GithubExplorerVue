<script setup lang="ts">
interface Props {
  title:string 
}

const props = defineProps<Props>()
</script>


<template>
  <h1
    class="text-3xl lg:text-4xl font-semibold text-gray-700 max-w-4xl leading-tight mt-20 lg:mt-28 md:word-wrap"
  >
    {{props.title}}
  </h1>
</template>