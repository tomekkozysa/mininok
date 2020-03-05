/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

function Navigation() {
  return (
    <Container>
        <Link to={`/`}>
            Work 
        </Link>
         | 
        <Link to={`/contact/`}>
            Contact 
        </Link>
         | 
        <Link to={`/about/`}>
            About 
        </Link>

    
  </Container>
  )
}


const Container = styled.div`
  display: flex;
`

export default Navigation
