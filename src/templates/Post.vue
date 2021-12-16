<template>
  <Layout>
    <template #header>
      <header class="masthead" :style="`background-image: url('http://localhost:1337${$page.post.backImage.url}')`">
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <div class="site-heading">
                      <h1>{{$page.post.title}}</h1>
                  </div>
              </div>
          </div>
        </div>
      </header>
    </template>
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7" v-html="mdToHtml($page.post.content)"></div>
          </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  metadata {
    siteName
  }
  post: strapiPost(id: $id) {
    title
    content
    backImage {
      url
    }
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  name: 'PostPage',
  methods: {
    mdToHtml(mdStr) {
      return md.render(mdStr)
    }
  }
}
</script>

<style>

</style>