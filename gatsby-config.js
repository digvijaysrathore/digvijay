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
        contentPath: "content/blog",
        basePath: "/blog",
        postsPerPage: 10,
        pageQuery: `query {
          allPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {name: {nin: "Alpha Humans"}}}}) {
            nodes {
              id
              slug
            }
          }
          allPostTag(sort: {fields: name, order: ASC}) {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
        slugResolver: null,
      }
    },
    {
      resolve: `@reflexjs/gatsby-theme-post`,
      options: {
        contentPath: "content/posts",
        basePath: "/journal",
        postsPerPage: 10,
        pageQuery: `query {
          allPost(sort: {fields: date, order: DESC}, filter: {tags: {elemMatch: {name: {nin: "Journal"}}}}) {
            nodes {
              id
              slug
            }
          }
          allPostTag(sort: {fields: name, order: ASC}) {
            nodes {
              id
              name
              slug
            }
          }
        }
      `,
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
    },
  ],
}
