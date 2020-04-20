import PropTypes from "prop-types"
import React from "react"
const Footer = () => {
  return(
      <footer>
          <h1>Footer</h1>
      </footer>   
  )  
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
