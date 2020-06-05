import React, { Component } from "react";
import { graphql } from "gatsby";
import GridElement from '../components/GridElement';
import Layout from "../components/Layout";
import SEO from "../components/seo";


class Homepage extends Component {
  render() {
    const data = this.props.data;
    
    return (
      <Layout>
        <SEO title="Home" />
        {
          data.allWordpressWpGatsby.edges.map((item) => (
            <GridElement
              content={item.node}
              key={item.slug}
            />
          ))
        }
      </Layout>
      )
    }
  }
  
  export default Homepage;
  
  export const pageQuery = graphql`
    query {
      allWordpressWpGatsby
      {
        edges {
          node {
            title
            excerpt
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            tags {
              name
            }
          }
        }
      }
    }
  `;
  