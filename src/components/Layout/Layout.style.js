import styled from 'styled-components';

const Wrapper = styled.main`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  height: 100vh;
  top: 0;
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 8rem;
  height: 100%;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: .5rem;
`;


export { Wrapper, Inner, Footer };
