<template>
  <v-card
    :to="{
      name: 'blog-slug',
      params: { slug }
    }"
    outlined
    tile
  >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ date }}</v-card-subtitle>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
  }
})
</script>
