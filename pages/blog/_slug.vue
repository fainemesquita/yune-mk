<template>
  <v-sheet class="mx-2">
    <v-sheet>
      <h2 class="mt-2 mb-0">{{ article.fields.title }}</h2>
      <v-subheader class="pa-0">{{ article.sys.updatedAt }}</v-subheader>
      <v-divider class="py-3"></v-divider>
    </v-sheet>
    <vue-markdown>{{ article.fields.body }}</vue-markdown>
  </v-sheet>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  components: { VueMarkdown },
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug': params.slug
      })
      .then((entries) => {
        return {
          article: entries.items[0]
        }
      })
      .catch(console.error)
  },
  head() {
    return {
      title: this.article.fields.title,
      meta: [
        {
          hid: 'description',
          name: 'desctiption',
          content: this.article.fields.description
        }
      ]
    }
  }
}
</script>
