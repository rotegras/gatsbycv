import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';


const ImageWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const BkgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1rem;
`;

const Title = styled.h1`
  position: relative;
  width: auto;
`;


const Content = styled.p`
  width: 100%;
  z-index: 200;
`;

const TagWrapper = styled.ul`
  list-style: none;
  display: flex;
  padding: 0 0 1rem;
  margin: 0;
  z-index: 200 !important;
`;

const Tag = styled.li`
  margin-right: 1rem;
  background: #eee;
  padding: .125rem 1rem;
  font-size: .75rem;
  border-radius: 4px;
`;

export {
  BkgImage, Content, ImageWrapper, Tag, TagWrapper, Title,
};
