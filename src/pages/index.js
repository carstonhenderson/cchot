import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DateChecker from '../components/dateChecker'

const IndexPage = () => (
  <Layout>
    <SEO title="Can Carston hang out today?" />
    <DateChecker />
  </Layout>
)

export default IndexPage
