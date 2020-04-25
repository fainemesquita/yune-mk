<template>
  <router-link
    :to="{
      name: 'blog-slug',
      params: { slug }
    }"
    tag="section"
  >
    <v-card-title class="font-weight-bold" v-text="title" />
    <v-card-subtitle class="caption" v-text="localeDate" />
    <v-card-text v-text="description" />
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
