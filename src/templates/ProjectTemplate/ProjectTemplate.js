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
function ProjectTemplate({ data, pageContext }) {
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
              backgroundColor={`#111`}
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

ProjectTemplate.propTypes = {
  data: PropTypes.shape.isRequired,
};

ProjectTemplate.defaultProps = {
  data: {
    wordpressWpGatsby: {
      content: '',
      excerpt: '',
      data: '',
      featured_media: {
        alt_text: '',
        local_file: {
          childImageSharp: {
            fluid: {
              aspectRatio1: 0.94,
              base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABp0lEQVQoz4WSTU9TQRiF+VVsXIsJuvAPsHDv0oUrlm4wtrRAXOmCkEAiIW6AGHLTJgVL+AhaWlqwCYSP23tLRVvu59yZh7mFkltAPMmbk5m875kzc2ZAKUVcMRzHxbl0+B/ifiEEYRh2ubcXYyApKKXUTaLLfuBjmiaNholtW9jNJk3rlJPDfTzf785EMrqdvRVMnnoXIojw3BApFHoW1bFRrV8POu7hnsPC6gYr+TwHVpnD8wrWRYW6fV1lq8qOuc/OaZlao8Rxq36jeMdhbyEiwYuXr3gyPMxcaYqFUpb5n1k+b08wWczw5luat8Y47wpZPm2lWK7N0jP3T8Fnz0cYHHrK93qGpXKar6UUcz/GyRRTvF7+wGg+RXY9zdjae77sziAfE4yvPPlxmv...",
              sizes: "(max-width: 1908px) 100vw, 1908px",
              src: "/static/8676958a75d8d4c57fa99803a481584c/71b07/project_ooloo-io.png",
              srcSet: "/static/8676958a75d8d4c5",
            }
          }
        }
      },
      title: '',
      tags: [{name: ''}],
      slug: '',
    }
  }
}

export default ProjectTemplate;

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
`;
