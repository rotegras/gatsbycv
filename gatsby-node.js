/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

// You can delete this file if you're not using it

const path= require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages=({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/ProjectTemplate/ProjectTemplate.js`);
  return graphql(`
  {
    allWordpressWpGatsby(sort:{fields:[date], order:DESC}) {
      edges {
        node {
          date( formatString: "/YYYY/MM/DD/" )
          excerpt
          featured_media {
            localFile{
              childImageSharp {
                id
                fluid {
                  src
                }
              } 
            }
          }
          id
          slug
          title
        }
      }
    }
  }
  `)
  .then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`);
      return;
    }
    result.data.allWordpressWpGatsby.edges.forEach(edge => {
      createPage({
        // will be the url for the page
        path: `/project/${edge.node.slug}`,
        // specify the component template of your choice
        component: postTemplate,
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this posts's data.
        context: {
          slug: edge.node.slug,
        },
      })
    });
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
