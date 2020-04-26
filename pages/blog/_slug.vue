<template>
  <v-sheet
    class="mx-2 mx-md-auto mt-md-2"
    :max-width="$vuetify.breakpoint.thresholds.xs + 100"
  >
    <v-sheet>
      <h2 class="mt-2 mb-0">{{ article.fields.title }}</h2>
      <div class="caption" v-text="datetime" />
      <v-divider class="my-3"></v-divider>
    </v-sheet>
    <vue-markdown>{{ article.fields.body }}</vue-markdown>
  </v-sheet>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { dateTimeFormatter } from '~/assets/util'
import { createClient } from '~/plugins/contentful'

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
  computed: {
    updatedAt() {
      return dateTimeFormatter(this.article.sys.updatedAt)
    },
    createdAt() {
      return dateTimeFormatter(this.article.sys.createdAt)
    },
    datetime() {
      if (this.updatedAt === this.createdAt) {
        return this.createdAt
      }
      return `${this.updatedAt} | Originally created at: ${this.createdAt}`
    }
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
