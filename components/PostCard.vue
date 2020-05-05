<template>
  <router-link
    :to="{
      name: 'blog-slug',
      params: { slug }
    }"
    class="block py-2 opacity-animation"
  >
    <h1 class="text-2xl font-medium" v-text="title" />
    <div class="text-sm text-gray-800 font-light" v-text="localeDate" />
    <p class="mt-1 font-light" v-text="description" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { dateTimeFormatter } from '~/assets/util'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return { localeDate: dateTimeFormatter(props.date) }
  }
})
</script>
