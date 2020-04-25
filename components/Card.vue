<template>
  <nuxt-link
    :to="{
      name: 'blog-slug',
      params: {
        slug
      }
    }"
    tag="div"
  >
    <article class="card">
      <h1 class="card_title">{{ title }}</h1>
      <p class="card_date">{{ date }}</p>
    </article>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      required: true
    }
  }
})
</script>
