// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'posts/**/*.md',
    //     typeName: 'markdownPost',
    //     remark: {
    //       //Config options can be added here
    //     }
    //   }
    // },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337/',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post'],
        singleTypes: ['blog'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    },
    
  ],
  transformers: {
    remark: {
      
    }
  },
  templates: {
    StrapiPost: [{
      path: '/post/:id',
      component: './src/templates/Post.vue'
    }]
  }
}
