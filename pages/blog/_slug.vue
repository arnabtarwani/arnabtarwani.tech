<template>
  <div class="container markdown-body">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145293740-1"></script>
    <script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  gtag('config', 'UA-145293740-1')
    </script>

    <hr style="height:0.1em;" />
    <h1 class="title">{{ post.attributes.title }}</h1>
    <p class="subtitle">{{ post.attributes.date }}</p>
    <!-- <div class="subtitle">
      Published on {{ attributes.ctime }} by {{ attributes.author }}
    </div>-->
    <!-- <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <figure class="image">
          <img :src="imgSrc" />
        </figure>
      </div>
    </div>-->
    <!-- eslint-disable-next-line -->
    <div class="content" v-html="post.html" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`)
      return {
        post
      }
    } catch (error) {
      return false
    }
  },
  head() {
    return {
      title: this.post.attributes.title
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css');

.container {
  margin-top: 3vh;
  font-family: 'Poppins', sans-serif;
  text-align: justify;
}

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 20px;
}

.content {
  margin-top: 2vh;
  font-size: 1.3em;
}

.subtitle {
  font-size: 1em;
}

@media (max-width: 767px) {
  .title {
    text-align: initial;
    text-align-last: left;
  }
  .container {
    margin-top: 2vh;
  }

  .markdown-body {
    padding: 15px;
  }

  .content {
    margin-top: 1vh;
    font-size: 1.1em;
  }
}
</style>
