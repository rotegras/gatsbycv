import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../../components/Layout'
import {
  BkgImage, ImageWrapper, Title, Content, Tag, TagWrapper,
} from './ProjectTemplate.style';

// class Post extends Component {
function Post({ data }) {
    const post = data.wordpressWpGatsby
    const { content, tags, title, featured_media } = post;
    const imageFluid = featured_media.localFile.childImageSharp.fluid;

    return (
      <Layout>
          <ImageWrapper>
            <BkgImage 
              Tag="section"
              fluid={imageFluid}
              backgroundColor={`#fff`}
              isDarken="true"
            >

              <Title>{title}</Title>
              <Content
                  dangerouslySetInnerHTML={{ __html: content }}
              />
              <TagWrapper>
              {
                tags.length > 0 && tags.map((tag) => {
                  return <Tag key={tag.name}>{tag.name}</Tag>
                })
              }
              </TagWrapper>
            </BkgImage>
          </ImageWrapper>
      </Layout>
    );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  // edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    wordpressWpGatsby( slug: { eq: $slug }) {
      content
      date( formatString: "/YYYY/MM/DD/" )
      excerpt
      featured_media {
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
      slug
      tags {
        name
      }
      title
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`