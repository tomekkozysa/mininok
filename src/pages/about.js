import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class AboutPage extends React.Component {
  render() {
    const siteTitle = "About NoK"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        This is about page
      </Layout>
    )
  }
}

export default AboutPage
