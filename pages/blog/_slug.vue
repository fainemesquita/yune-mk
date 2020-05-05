<template>
  <div class="p-2 sm:mx-auto md:w-9/12 lg:w-6/12">
    <div id="#article-header">
      <h2 class="text-2xl md:text-3xl font-bold">{{ article.fields.title }}</h2>
      <div class="text-small text-gray-800 font-light" v-text="datetime" />
      <hr class="mt-2" />
    </div>
    <vue-markdown class="mt-4">{{ article.fields.body }}</vue-markdown>
  </div>
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
          name: 'description',
          content: this.article.fields.description
        }
      ]
    }
  }
}
</script>
