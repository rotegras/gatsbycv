import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 1140px;
  padding: 40px .5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 50px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: .5rem;
`;


export { Wrapper, Inner, Footer };
