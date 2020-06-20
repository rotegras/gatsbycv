import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../../components/Layout'
import {
  BkgImage,
  Body,
  Content,
  ImageWrapper,
  NavLink,
  NextLink,
  ProjectNavigation,
  Tag,
  TagWrapper,
  Title,
} from './ProjectTemplate.style';

// class Post extends Component {
function Post({ data, pageContext }) {
    const post = data.wordpressWpGatsby
    const { content, tags, title, featured_media } = post;
    const imageFluid = featured_media.localFile.childImageSharp.fluid;

    const nextProjectSlug = pageContext.next.slug;
    const prevProjectSlug = pageContext.prev.slug;

    return (
      <Layout>
          <ImageWrapper>
            <BkgImage 
              Tag="section"
              fluid={imageFluid}
              backgroundColor={`#fff`}
              isDarken="true"
            >
            <Content>
              <Title>
                <span>
                  {title}
                </span>
              </Title>
              <Body
                  dangerouslySetInnerHTML={{ __html: content }}
              />
              <TagWrapper>
              {
                tags.length > 0 && tags.map((tag) => {
                  return <Tag key={tag.name}>{tag.name}</Tag>
                })
              }
              </TagWrapper>
              </Content>

              <ProjectNavigation>
                {
                  prevProjectSlug &&
                  <NavLink to={`/project/${prevProjectSlug}`}>Prev</NavLink> 
                }
                {
                  nextProjectSlug &&
                  <NextLink to={`/project/${nextProjectSlug}`}>Next</NextLink>
                }
              </ProjectNavigation>
            </BkgImage>
          </ImageWrapper>
      </Layout>
    );
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
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
    allWordpressWpGatsby(sort:{fields:[date], order:DESC}) {
      edges {
        node {
          date( formatString: "/YYYY/MM/DD/" )
          excerpt
          id
          slug
          title
        }
      }
    }
  }
`