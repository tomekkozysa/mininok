import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Contact NoK"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact Nok"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        
        This is contact page
      </Layout>
    )
  }
}

export default ContactPage
