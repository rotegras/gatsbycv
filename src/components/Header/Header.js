import PropTypes from "prop-types"
import React from "react"
import Nav from './Nav'
import { Wrapper, Inner, Brand } from './Header.style';


const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Inner>
        <Brand to="/">
            {siteTitle}
        </Brand>
        <Nav />
      </Inner>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
