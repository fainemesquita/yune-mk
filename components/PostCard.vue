<template>
  <v-card
    :to="{
      name: 'blog-slug',
      params: { slug }
    }"
    outlined
    tile
  >
    <v-card-title class="font-weight-bold" v-text="title" />
    <v-card-subtitle class="caption" v-text="localeDate" />
    <v-card-text v-text="description" />
  </v-card>
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
