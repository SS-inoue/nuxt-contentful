<template>
  <div class="container">
    <div class="d-flex align-items-center mb-4">
      <h4 class="mb-0">新着ブログ記事</h4>
    </div>
    <ul v-if="posts" class="list-unstyled row row-cols-3">
      <li v-for="(post, key, index) in posts" :key="index">
        <card :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Watch } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

@Component({
  components: {
    Card
  },
  async asyncData({ env }) {
    return await client.getEntries({
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
    })
      .then((posts: any) => {
        return {
          posts: posts.items
        }
      })
      .catch(console.error)
  },
})
export default class Home extends Vue {

}
</script>
