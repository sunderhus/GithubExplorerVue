<script setup lang="ts">
  import PageHeader from '@/presentation/components/PageHeader.vue'
  import { RouterLink, useRoute } from 'vue-router';
  import {OhVueIcon} from 'oh-vue-icons'
 
 const {params} = useRoute()
</script>

<template>
  <PageHeader>
    <template #action>
      <RouterLink to="/" >
      <OhVueIcon scale="0.9" fill="gray" name="fa-chevron-left"  />
      <strong>Go back</strong>
    </RouterLink>

  </template>
</PageHeader>

<div class="flex">
  <p>{{ params.owner }}</p>
  <p>{{ params.repository }}</p>
</div>
  

</template>