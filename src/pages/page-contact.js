import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <h1>contact</h1>
    <p>javi@rotegras.com</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default ThirdPage
