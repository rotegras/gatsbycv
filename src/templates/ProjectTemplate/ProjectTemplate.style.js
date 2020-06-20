import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';


const Body = styled.div`

  > p {
    padding: .5rem;
    background: #fff;
    width: auto;
    margin-bottom: 1rem;
  }
`;

const BkgImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  right: 1rem;
  display: flex;
  width: 400px;
  margin-bottom: 1rem;
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
