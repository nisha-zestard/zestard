/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, schemaMarkup }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {schemaMarkup &&
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      }
      <script src="https://code.jquery.com/jquery-1.12.4.min.js" crossorigin="anonymous"></script>
      {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" crossorigin="anonymous"></script> */}
      {/* <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zestard Technologies",
            "url": "https://www.zestard.com/",
            "logo": "https://phptasks.com/zestard-mmm/wp-content/uploads/2019/03/zestard-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@zestard.com",
              "telephone": "+1 4089404509",
              "contactType": "customer service",
              "areaServed": ["US","UK","IN"],
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/zestard",
              "https://www.linkedin.com/company/zestard",
              "https://twitter.com/zestardtech",
              "https://www.youtube.com/c/zestardtechnologies",
              "https://www.instagram.com/zestard/"

            ]
          }
        `}
      </script> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
