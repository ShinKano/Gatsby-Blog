import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
    <Layout>
        <SEO title="Page two" />
            <h1>This is about pageoooo</h1>
            <p>Welcome</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default AboutPage;