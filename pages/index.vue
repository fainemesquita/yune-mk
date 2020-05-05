<template>
  <div
    class="grid md:grid-cols-3 col-gap-4 divide-x-4 p-2 md:mx-auto md:w-10/12"
  >
    <div class="md:col-span-2 divide-y">
      <Post-Card
        v-for="post in posts"
        :key="post.sys.slug"
        :title="post.fields.title"
        :description="post.fields.description"
        :date="post.sys.updatedAt"
        :slug="post.fields.slug"
      />
    </div>
    <div class="md:col-span-1 hidden md:flex">
      <div class="mx-auto mt-2">記事の数: {{ posts.length }}</div>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  components: {
    PostCard
  },
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.updatedAt'
      })
      .then((entries) => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>
