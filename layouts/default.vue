<template>
  <div>
    <header class="sticky top-0 inset-x-0 z-50 bg-teal-400">
      <div class="flex py-1 mx-2 sm:mx-auto md:w-9/12">
        <div class="flex-grow opacity-animation">
          <nuxt-link to="/" class="text-3xl font-medium">Yune MK</nuxt-link>
        </div>
        <a
          v-for="(link, idx) in links"
          :key="idx"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.service"
          class="flex-grow-0 mx-1 w-12"
        >
          <img
            class="object-none object-center w-full opacity-animation"
            :src="link.src"
            :alt="link.service"
          />
        </a>
      </div>
    </header>

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

type Link = {
  service: string
  href: string
  src: string
}

export default defineComponent({
  setup() {
    const links = ref<Link[]>([
      {
        service: 'Twitter',
        href: 'https://twitter.com/yune_mk',
        src: require('~/assets/icons/twitter.svg')
      },
      {
        service: 'GitHub',
        href: 'https://github.com/MK-Yune',
        src: require('~/assets/icons/github.svg')
      }
    ])

    return { links }
  }
})
</script>
