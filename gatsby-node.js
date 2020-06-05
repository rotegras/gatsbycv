/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

// You can delete this file if you're not using it

const path= require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages=({actions,graphql})=>{
  const {createPage}= actions
  return graphql(`
  {
    allWordpressWpGatsby(sort:{fields:[date], order:DESC}) {
      edges {
        node {
          id
          date( formatString: "/YYYY/MM/DD/" )
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
        }
      }
    }
  }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`);
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  });
  
  
  //   .then(result => {
  //     if (result.errors){
  //         result.errors.forEach(e => console.error(e.toString()))
  //         return Promise.reject(result.errors)
  //     }
  //     const AllPostsTemplate= path.resolve('./src/templates/AllPosts.js')
  //     const postTemplate = path.resolve(`./src/templates/post.js`)
  //     createPage({
  //         path:'/blog',
  //         component:AllPostsTemplate,
  //         context:{
  //             allData:result.data.allWordpressPost.edges
  //         }
  //     })
  
  //     const allPosts = result.data.allWordpressPost.edges
  
  //     allPosts.forEach(element=>{
  //         createPage({
  //             path:`/blog/${element.node.slug}`,
  //             component:postTemplate,
  //             context:{
  //                 id:element.node.id
  //             }
  //         })
  //     })
  // })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
