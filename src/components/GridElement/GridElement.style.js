import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';


const Wrapper = styled.article`
  position: relative;
  padding: 1rem;
  width: 100%;
  min-heght: 450px;

  @media only screen and (min-width: 768px) {
    width: 33.3%;
  }
`;

const WrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.h3`
  text-decoration: none;
  font-family: 'Montserrat', arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: #111;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 50%;
`;

const Excerpt = styled.p`
  font-family: 'Montserrat', arial, sans-serif;
  font-size: .75rem;
  font-weight: 300;
  line-height: 1;
  color: #111;
  margin-top: 0;
  padding-right: 25%;
`;

const Image = styled(Img)`
  margin-bottom: .5rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  border: 1px solid #eee;
`;


export { Wrapper, WrapperLink, Title, Excerpt, Image };
