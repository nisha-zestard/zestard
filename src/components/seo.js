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
          content: `Zestard Technologies`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@zestardtech`,
        },
        {
          name: `twitter:title`,
          content: `Full Service E-Commerce Agency | Zestard Technologies`,
        },
        {
          name: `twitter:description`,
          content: `content="We deliver robust E-commerce Stores & marketing solutions to grow your online business. 350+ Online Stores, 800+ Projects Delivered, 95% Repeat Clients.`,
        },
        {
          name: `twitter:image`,
          content: `https://phptasks.com/zestard-mmm/wp-content/uploads/2019/03/zestard-logo.png`,
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
