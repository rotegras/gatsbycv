import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';


const Body = styled.div`
  min-width: 100%;
  float: none;
  clear: both;
  margin-bottom: .5rem;

  > p {
    padding: .25rem 1.5rem .25rem .5rem;
    background: #fff;
    width: auto;
    margin-bottom: .5rem;
    display: block;
    float: left;
  }
`;

const BkgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::before,
  &::after {
    filter: invert(
      ${({ isDarken }) => {
        return isDarken ? '5%' : '0%'
      }}
    );
  }
`;

const Content = styled.div`
  z-index: 200;
  width: 100%;
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const ProjectNavigation = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  display: flex;
  width: 200px;
  margin-bottom: .75rem;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  font-family: 'Montserrat';
  font-weight: 700;
  text-decoration: none;
  padding: .125rem 1rem;
  margin: 0 1rem;
  display: block;
  color: #111;
  background: #fff;
`;

const NextLink = styled(NavLink)`
  justify-self: flex-end;
`

const Title = styled.h1`
  position: relative;
  font-size: 1.15rem;

  > span {
    background: #fff;
    padding: .5rem;
  }
`;

const TagWrapper = styled.ul`
  min-width: 100%;
  list-style: none;
  display: flex;
  padding: 0;
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
  BkgImage, Body, Content, ImageWrapper, NavLink, NextLink, ProjectNavigation, Tag, TagWrapper, Title,
};
