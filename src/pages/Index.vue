<template>
  <Layout>
      <!-- Main Content-->
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <!-- Post preview-->
                  <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
                      <g-link :to="'/post/' + edge.node.id ">
                          <h2 class="post-title">{{edge.node.title}}</h2>
                      </g-link>
                      <p class="post-meta">
                          Posted by
                          <g-link to="/">{{edge.node.author}}</g-link>
                          on {{edge.node.created_at}}
                      </p>
                  </div>
                  
                  <hr class="my-4" />
                  <!-- Pager-->
                  <div class="d-flex justify-content-end mb-4"><g-link class="btn btn-primary text-uppercase" to="/">Older Posts →</g-link></div>
              </div>
          </div>
      </div>
  </Layout>
</template>
<page-query>
  query {
      posts: allStrapiPost {
        edges {
           node {
               id
               title
               content
               created_at
               author
           }
        }
      }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
