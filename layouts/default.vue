<template>
  <v-app>
    <v-app-bar app flat hide-on-scroll color="light-blue accent-2">
      <v-toolbar-title class="ml-md-12">
        <nuxt-link to="/" tag="span">Yune MK</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, idx) in links"
        :key="idx"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        icon
        :aria-label="link.service"
        class="mr-md-6"
      >
        <v-icon v-text="link.icon" />
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

type Link = {
  service: string
  href: string
  icon: string
}

export default defineComponent({
  setup() {
    const links = ref<Link[]>([
      {
        service: 'Twitter',
        href: 'https://twitter.com/yune_mk',
        icon: 'mdi-twitter'
      },
      {
        service: 'GitHub',
        href: 'https://github.com/MK-Yune',
        icon: 'mdi-github'
      }
    ])

    return { links }
  }
})
</script>
