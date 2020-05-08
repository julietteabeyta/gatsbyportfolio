import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import get from "lodash/get"

export const fetchBlogPosts = (setBlogPosts, data) => {
  const blogPosts = get(data, "allContentfulBlogPost.edges");
  if (blogPosts) setBlogPosts(blogPosts);
}

export default function Blog(props) {
  const [blogPosts, setBlogPosts] = useState([]);
  const { data, posts } = props;

  useEffect(() => {
    if (posts) {
      setBlogPosts(posts);
    }
  }, [posts, setBlogPosts]);
  if (!blogPosts || !blogPosts.length) {
    fetchBlogPosts(setBlogPosts, data);
  }
  let blogpostlinks = []
  blogPosts.forEach((post, index) => {
    const { node: { publishDate, slug, title, description } } = post
    const date = new Date(publishDate)
    const month =
      (date.getUTCMonth() + 1).toString().length === 1
        ? "0" + (date.getUTCMonth() + 1).toString()
        : (date.getUTCMonth() + 1).toString()
    const year = date
      .getUTCFullYear()
      .toString()
      .substr(-2)
    blogpostlinks.push(
      <div key={index}>
        <h3>
          <Link to={`/blog/${slug}`} className="blog-entry">
            {title}
          </Link>
        </h3>
        <p className="blog-date">
          {month}.{year}
        </p>
        <p className="blog-description">{description.description}</p>
      </div>
    )
  })

  return (<div className="blog-entries section">{blogpostlinks}</div>)
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
          heroImage {
            description
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
          description {
            description
          }
          publishDate
        }
      }
    }
  }
`
