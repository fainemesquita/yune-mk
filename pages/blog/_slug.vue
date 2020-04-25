<template>
  <section class="slug">
    <h1 class="slug_title">{{ article.fields.title }}</h1>
    <p class="slug_date">{{ article.sys.updatedAt }}</p>
    <vue-markdown>{{ article.fields.body }}</vue-markdown>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  components: { VueMarkdown },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  transition: 'slide-right',
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
          content: this.article.fields.title
        }
      ]
    }
  }
}
</script>
