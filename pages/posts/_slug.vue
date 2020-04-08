<template>
  <div class="container flex-column justify-content-start">
    <p class="text-right">
    </p>
    <h1>
      {{ post.fields.title }}
    </h1>
    <p class="text-right">
      {{ post.fields.author.fields.name }}
    </p>
    <div v-html="$md.render(bodyDom(post.fields.body))">
    </div>
    <div class="text-center mt-4">
      <router-link to="/" class="btn btn-primary">
        Back to Home
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

@Component({
  components: {
  },
  async asyncData({ params }) {
    return await client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
      })
      .then((entries: any) => {
        console.log(entries.items[0])
        return {
          post: entries.items[0],
        }
      })
      .catch(console.error)
  },
})
export default class EntryPost extends Vue {
  @Emit()
  private bodyDom(mhtml: string): string {
    return mhtml.trim()
  }
}
</script>
