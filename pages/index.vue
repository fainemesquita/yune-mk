<template>
  <section>
    <Post-Card
      v-for="post in posts"
      :key="post.sys.slug"
      :title="post.fields.title"
      :description="post.fields.description"
      :date="post.sys.updatedAt"
      :slug="post.fields.slug"
    />
  </section>
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
