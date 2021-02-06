// BlogPage sidebar

import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import { removePre, removeSpecialSymbols } from './../util/common'

const BlogSidebar =   () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 5, sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            title
            slug
            link
          }
        }
      }
    }
  `)

  return (
    <div>
      {/* Recent Posts */}
      <section id="recent-posts-2" className="widget widget_recent_entries">
        <div className="card">
          <h2 className="widget-title">Recent Posts</h2>
          <ul>
            {data.allWpPost.edges.map(({ node }) => (
              <li key={node.id}>
              <Link to={`/blog/${removePre(node.link)}`}>{`${removeSpecialSymbols(node.title)}`}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlogSidebar
