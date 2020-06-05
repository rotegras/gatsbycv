import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Wrapper, Inner, Title, Excerpt, Image
} from './GridElement.style';


export default function GridElement({ content }) {
  const item = {
    title: content.title,
    slug: content.slug,
    excerpt: content.excerpt,
    image: content.featured_media !== null && content.featured_media.localFile !== null
      ? content.featured_media.localFile.childImageSharp.fluid
      : '',
    };

  const createMarkup = (item) => { return {__html: item}; };

  return (
    <Wrapper>
      <Inner>
        {
          item.image && <Image
            imgStyle={{ objectFit: 'contain' }}
            fluid={item.image}
            alt={item.title}
          />
        }

        <Excerpt dangerouslySetInnerHTML={createMarkup(item.excerpt)} />

        <Title>{item.title}</Title>
      </Inner>
    </Wrapper>
    )
  }
  
GridElement.propTypes = {
  content: PropTypes.shape(PropTypes.any).isRequired,
  imageData: PropTypes.string,
}