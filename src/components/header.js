import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/styles'
import React from "react"
import Menu from './menu'


const useStyles = makeStyles({
  brand: {

    display: 'flex',
    alignItems: 'center',
  }
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
  <header
    style={{
      background: `white`,
      marginBottom: `.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
        <h1 className={classes.brand}>
        <Link
          to="/"
          style={{
            color: `#999`,
            textDecoration: `none`,
            fontSize: '1rem',
            lineHeight: '1rem',
            margin: 0,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
