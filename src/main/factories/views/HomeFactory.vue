<script setup lang="ts">
import { defineOptions } from 'vue'
import Home from '@/presentation/pages/Home.vue'
import { makeRemoteSearchRepository } from '../use-cases/remote-search-repository-factory'
import { RequiredFieldValidator } from '@/validation/RequiredFieldValidator'
import { makeCacheLoadRepositories } from '../use-cases/cache-load-repositories-factory'
import { makeCacheSaveRepositories } from '../use-cases/cache-save-repositories-factory'

defineOptions({
  name: 'HomeFactory'
})
</script>

<template>
  <Home
    :searchRepository="makeRemoteSearchRepository()"
    :validation="new RequiredFieldValidator()"
    :loadRepositories="makeCacheLoadRepositories()"
    :saveRepositories="makeCacheSaveRepositories()"
  />
</template>
