require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "digvijay",
    description: "Hi I'm Digvijay",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/blog",
        postsPerPage: 4,
        pageQuery: null,
        slugResolver: null,
      }
    },
    {
      resolve: `@reflexjs/gatsby-theme-video`,
      options: {
        contentPath: "content/videos",
        basePath: "/videos",
        videosPerPage: 10,
        pageQuery: null,
        slugResolver: null,
        providers: []
      }
    }
  ],
}
