<template>
  <v-row no-gutters>
    <v-col cols="12" md="9">
      <v-sheet
        v-for="post in posts"
        :key="post.sys.slug"
        class="mx-md-12 mt-md-2"
      >
        <Post-Card
          :title="post.fields.title"
          :description="post.fields.description"
          :date="post.sys.updatedAt"
          :slug="post.fields.slug"
        />
        <v-divider></v-divider>
      </v-sheet>
    </v-col>
    <v-col class="d-none d-md-flex" md="3">
      <v-sheet> total posts: {{ posts.length }} </v-sheet>
    </v-col>
  </v-row>
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
