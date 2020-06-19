/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path= require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
    // const fileNode = getNode(node.parent)
    // console.log(node.internal.type)
//   }
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
