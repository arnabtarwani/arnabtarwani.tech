<template>
  <div class="container">
    <h1 class="title">Blog Posts</h1>
    <section class="posts">
      <div v-for="post in posts" :key="post.attributes.title" class="columns">
        <div class="column is-three-quarters">
          <p class="title is-4">
            <nuxt-link :to="post._path">{{ post.attributes.title }}</nuxt-link>
          </p>
          <p class="subtitle is-6">{{ post.attributes.tags }}</p>
          <div class="content">
            <p>{{ post.attributes.date }}</p>
            <nuxt-link :to="post._path">Read</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const context = await require.context('~/content/', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  }
}
</script>
