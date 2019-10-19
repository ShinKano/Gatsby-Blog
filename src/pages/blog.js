import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
    <Layout>
        <SEO title="Blog" />
        <h1>Latest Blogs</h1>
        {data.allMarkdownRemark.edges.reverse().map(post => (
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>{post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </Layout>
)


export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            path
                            date(formatString: "MMMM DD, YYYY")
                            author
                        }
                        excerpt
                        id
                    }
                }
            }
    }
`


export default BlogPage;