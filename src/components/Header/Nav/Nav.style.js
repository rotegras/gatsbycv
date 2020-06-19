import styled from 'styled-components';
import { Link } from "gatsby"


const Wrapper = styled.nav`
  height: 100%;
  display: flex;
  width: auto;
  align-items: center;
  z-index: 100;
`;

const Item = styled(Link)` 
  font-family: 'Montserrat', arial, sans-serif;
  font-size: .875rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: lowercase;
  color: #111;
  padding-left: 2rem;
`; 


export { Wrapper, Item };

