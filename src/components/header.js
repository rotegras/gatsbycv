import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/styles'
import React from "react"
import Menu from './menu'


const useStyles = makeStyles({
  header: {
    background: `white`,
    marginBottom: `.45rem`,
    backgroundColor: 'yellow',
    position: 'fixed',
    width: '100%',
    height: '40px',
  },
  header__inner: {
    margin: `0 auto`,
    maxWidth: 1140,
    padding: `.45rem 1.0875rem`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
  }
})

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
  <header className={classes.header}
  >
    <div className={classes.header__inner}
      style={{
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
