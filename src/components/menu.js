import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/styles'
import React from "react"


const useStyles = makeStyles({
    menu: {
        display: 'flex',
  },
  menuItem: {
    paddingRight: '.5rem',
    fontSize: '.785rem',
    fontFamily: 'Helvetica, arial, sans-serif',
    textTransform: 'lowercase',
    textDecoration: 'none',
    color: '#111',

  }
});

const Menu = () => {
    const classes = useStyles();

    return (
        <nav className={classes.menu}>

        <Link className={classes.menuItem} to="/">
            Home
        </Link>
        <Link className={classes.menuItem} to="/page-2/">
            Portfolio
        </Link>
        <Link className={classes.menuItem} to="/page-3/">
             Contact
        </Link>
        </nav>

    )
}

export default Menu