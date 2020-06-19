import React, { Component } from "react";
import { graphql } from "gatsby";
import Grid from '../components/Grid';
import Layout from "../components/Layout";
import SEO from "../components/seo";


class Homepage extends Component {
  render() {
    const data = this.props.data;
    
    return (
      <Layout>
        <SEO title="Home" />
        <Grid content={data} />
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
            slug
            tags {
              name
            }
          }
        }
      }
    }
  `;
  