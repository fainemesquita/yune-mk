<template>
  <v-app>
    <v-app-bar app hide-on-scroll>
      <v-toolbar-title>Yune MK</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon href="https://twitter.com/yune_mk" target="_blank" rel="noopener">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon href="https://github.com/MK-Yune" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>-->
      <v-btn
        v-for="(link, idx) in links"
        :key="idx"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        icon
        :aria-label="link.service"
      >
        <v-icon v-text="link.icon" />
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

type Link = {
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
