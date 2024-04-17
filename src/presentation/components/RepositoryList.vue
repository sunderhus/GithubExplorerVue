<script setup lang="ts">
import { Repository } from '@/domain/models/Repository'
import { RouterLink } from 'vue-router'
import { OhVueIcon } from 'oh-vue-icons'
interface Props {
  repositories: Repository[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul class="my-20 space-y-4">
    <RouterLink
      v-for="{ name, description, owner } of props.repositories"
      :key="name"
      :to="`/repositories/${owner.login}/${name}`"
      class="flex items-center bg-white rounded-md p-4 mb-4 transition-transform duration-200 hover:translate-x-2"
    >
      <img
        :src="owner.avatar"
        :alt="owner.login"
        class="w-16 h-16 rounded-full mr-4 hidden md:block"
      />
      <div class="flex-1">
        <strong class="text-lg text-gray-900">{{ name }}</strong>
        <p class="text-lg font-light text-gray-500 mt-1">{{ description }}</p>
      </div>
      <OhVueIcon scale="0.9" fill="gray" name="fa-chevron-right" class="ml-auto hidden md:block" />
    </RouterLink>
  </ul>
</template>
