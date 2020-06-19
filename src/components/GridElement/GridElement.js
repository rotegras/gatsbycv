import React from 'react';
import {
  Wrapper, WrapperLink, Title, Excerpt, Image
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
        <WrapperLink to={`/project/${item.slug}`}>
        {
          item.image && <Image
            imgStyle={{ objectFit: 'contain' }}
            fluid={item.image}
            alt={item.title}
          />
        }
        <Title>{item.title}</Title>
        <Excerpt dangerouslySetInnerHTML={createMarkup(item.excerpt)} />
      </WrapperLink>
    </Wrapper>
    )
  }
  
// GridElement.propTypes = {
//   content: PropTypes.shape(PropTypes.any).isRequired,
//   imageData: PropTypes.string,
// }