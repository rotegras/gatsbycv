import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/Layout'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <h1>{post.title}</h1>
        <div>{post.content}</div>
        {post.featured_media &&
          <img src={post.featured_media.localFile.childImageSharp.fluid.src} alt={post.featured_media.alt_text} />
        }
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        alt_text
        source_url
        localFile {
          absolutePath
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`