<template>
  <div class="card mx-4">
    <img
      :src="
        post.fields.heroImage.fields.file.url +
          '?fit=thumb&f=top_left&w=330&h=220'
      "
      :srcset="
        post.fields.heroImage.fields.file.url +
          '?fit=thumb&f=top_left&w=330&h=220 1x,' +
          post.fields.heroImage.fields.file.url +
          '?fit=thumb&f=top_left&w=660&h=440 2x,'
      "
      class="card-img-top"
      :alt="post.fields.heroImage.title"
    />
    <div class="card-body">
      <h5 class="card-title">
        {{ post.fields.title }}
      </h5>
      <p class="card-text">
        {{ post.fields.description }}
      </p>
      <p class="text-right small">
        {{ post.fields.publishDate }}
      </p>
      <div class="tags">
        tags:&nbsp;
        <router-link
          v-for="tag in post.fields.tags"
          :key="tag"
          :to="'/blog/tags/' + tag"
        >
          {{ tag }}
        </router-link>
      </div>
      <div class="mt-3">
        <router-link
          :to="'/posts/' + post.fields.slug"
          class="btn btn-primary"
        >
          Go somewhere
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Post } from '@/types/post'

@Component
export default class Card extends Vue {
  @Prop({
    default: null,
  })
  private post!: Post
}
</script>
