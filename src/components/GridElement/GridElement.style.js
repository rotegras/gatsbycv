import styled from 'styled-components';
import Img from 'gatsby-image';


const Wrapper = styled.article`
  position: relative;
  padding: .5rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 33.3%;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: .5rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  border: 1px solid #eee;
`;

const Title = styled.h3`
  text-decoration: none;
  font-family: 'Montserrat', arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: #111;
  padding-right: 50%;
  margin-bottom: 0;
`;

const Excerpt = styled.p`
  font-family: 'Montserrat', arial, sans-serif;
  font-size: .75rem;
  font-weight: 300;
  line-height: 1;
  color: #111;
  margin-bottom: .25rem;
  margin-top: auto;
  padding-top: .5rem;
  padding-right: 25%;
`;

const Image = styled(Img)`
  margin-bottom: .5rem;
`;


export { Wrapper, Inner, Title, Excerpt, Image };
