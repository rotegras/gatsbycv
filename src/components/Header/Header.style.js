import styled from 'styled-components';
import { Link } from 'gatsby';


const Wrapper = styled.header`
  width: 100%;
  height: 40px;
  margin-bottom: .45rem;
  background-color: transparent;
  background: white;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  height: 100%;
  padding: .45rem 1.0875rem;
  margin: 0 auto;
`;

const Brand = styled(Link)`
  font-family: 'Audiowide';
  display: flex;
  align-items: center;
  color: #111;
  text-decoration: none;
  font-size: .875rem;
  line-height: 1rem;
  margin: 0;
  height: 100%;
`;


export { Wrapper, Inner, Brand }; 
