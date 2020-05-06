<template>
  <div class="p-2 sm:mx-auto md:w-9/12 lg:w-6/12">
    <div id="#article-header">
      <h2 class="text-2xl md:text-3xl font-bold">{{ article.fields.title }}</h2>
      <div class="text-small text-gray-800 font-light" v-text="datetime" />
      <hr class="mt-2" />
    </div>
    <vue-markdown
      class="markdown mt-4"
      :anchor-attributes="{ target: '_blank', rel: 'noopener noreferrer' }"
      >{{ article.fields.body }}</vue-markdown
    >
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

<style>
.markdown {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.markdown h1 {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2.25rem;
}
.markdown h2 {
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 2rem;
}
.markdown h3 {
  font-weight: bold;
  font-size: 1.5rem;
}
.markdown h4 {
  font-weight: bold;
  font-size: 1.25rem;
}
.markdown h5 {
  font-weight: bold;
  font-weight: bold;
}
.markdown h6 {
  font-weight: bold;
  font-weight: lighter;
}

.markdown ul {
  margin-top: 0.25rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}
.markdown ol {
  margin-top: 0.25rem;
  padding-left: 1.5rem;
  list-style-type: decimal;
}

.markdown blockquote {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.5rem 8px;
  border-left: 4px solid gray;
  background: #e7e7e7c7;
}

.markdown pre {
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  background: #ececec;
}

.markdown code {
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  padding: 0.05rem 0.2rem;
  border-radius: 5px;
  background: #ececec;
  color: #333;
}

.markdown hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
