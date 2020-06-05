
import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const useStyles = makeStyles({
  container: {
    // backgroundColor: 'yellow',
  },
  title: {
    fontSize: '1.5rem',
  },
});

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout className={classes.container}>
    <SEO title="Home" />
    <h1 className={classes.title}>Portfolio</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <Link className={classes.menuItem} to="/page-2/">page 2</Link>
    <Link className={classes.menuItem} to="/page-3/">page 3</Link>
    </Layout>
  )
}

export default IndexPage
