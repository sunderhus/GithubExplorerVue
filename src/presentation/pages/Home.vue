<script setup lang="ts">
import { LoadRepositories } from '@/domain/use-cases/LoadRepositories'
import { SearchRepository } from '@/domain/use-cases/SearchRepository'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { Validation } from '../protocols/validation'
import { SaveRepositories } from '@/domain/use-cases/SaveRepositories'
import { Repository } from '@/domain/models/Repository'
import RepositoriesList from '@/presentation/components/RepositoryList.vue'
import Footer from '@/presentation/components/Footer.vue'
import PageHeader from '@/presentation/components/PageHeader.vue'
import PageTitle from '@/presentation/components/PageTitle.vue'

defineOptions({
  name: 'HomeView'
})
interface Props {
  searchRepository: SearchRepository
  validation: Validation
  loadRepositories: LoadRepositories
  saveRepositories: SaveRepositories
}

const props = defineProps<Props>()

const searchText = ref('')
const formError = ref('')
const repositories = ref<Repository[]>([])

const isDuplicated = computed(() => {
  const savedRepositories = repositories.value.map((repo) =>
    `${repo.owner.login}/${repo.name}`.toLowerCase()
  )
  const parsedSearchText = searchText.value.toLowerCase()
  return savedRepositories.includes(parsedSearchText)
})

const handleSubmit = async () => {
  const validationError = props.validation.validate(searchText.value)
  if (validationError) {
    formError.value = validationError.message
    return
  }

  if (isDuplicated.value) {
    formError.value = 'This repository is already listed.'
    return
  }

  try {
    const response = await props.searchRepository.search(searchText.value)
    repositories.value.push(response)
    searchText.value = ''
    formError.value = ''
  } catch (error) {
    const parsedError = error as Error
    formError.value = parsedError.message
  }
}
onMounted(async () => {
  const result = await props.loadRepositories.load()
  console.log(result)
  repositories.value.push(...result)
})
watchEffect(() => {
  if (repositories.value.length > 0) {
    props.saveRepositories.save(repositories.value)
  }
})
</script>

<template>
  <PageHeader/>
  
  <PageTitle title="Explore repositories on GitHub."/>

  <form class="mt-10 lg:mt-16 max-w-xl w-full flex flex-col md:flex-row">
    <input
      v-model="searchText"
      class="flex-1 min-h-16 px-6 border border-gray-200 rounded-l-md ring-1 outline-none focus:ring-blue-500"
      :class="{
        'ring-red-500': formError
      }"
      type="text"
      placeholder="Please provide the name of the repository."
    />
    <button
      @click.prevent="handleSubmit"
      class="w-full md:w-[210px] min-h-16 bg-green-500 hover:bg-green-600 text-white font-bold rounded-r-md mt-4 md:mt-0 md:rounded-none md:rounded-r-md transition duration-200"
    >
      Search
    </button>
  </form>

  <p v-if="formError" class="mt-2 text-red-600">{{ formError }}</p>

  <RepositoriesList :repositories="repositories" />

  <Footer />
</template>
