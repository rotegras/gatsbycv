import React, { Component } from "react"
import { graphql } from "gatsby"
// import { makeStyles } from '@material-ui/core/styles'
import GridElement from '../components/gridElement'
import Layout from "../components/layout"
import SEO from "../components/seo"

// const useStyles = makeStyles({
//   container: {
//     backgroundColor: 'yellow',
//   },
//   title: {
//     fontSize: '1.5rem',
//   },
// });


class Homepage extends Component {

  // const classes = useStyles();

  render() {
    const data = this.props.data;

    return (
      <Layout className="container">
      <SEO title="Home" />
      <h1 className="title">Portfolio</h1>
        <GridElement
          content={data.allWordpressPost.edges}
        />
      </Layout>
    )
  }
 }

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          id
          excerpt
          slug
          featured_media {
            source_url
            alt_text
            media_details {
              file
              sizes {
                medium {
                  file
                  source_url
                }
              }
            }
          }
        }
      }
    }
  }
`
