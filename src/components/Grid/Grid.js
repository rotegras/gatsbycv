import React from 'react';
import GridElement from '../GridElement';
import PropTypes from 'prop-types';
import { Header, Wrapper } from './Grid.style';

function Grid({ content }) {
  return (
    <>
    <Wrapper>
      <Header>categories</Header>
      {
        content.allWordpressWpGatsby.edges.map((item) => (
          <GridElement
            content={item.node}
            key={item.slug}
          />
        ))
      }
    </Wrapper>
    </>
  );
}

Grid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape),
};

Grid.defaultProps = {
  content: [],
}

export default Grid;
