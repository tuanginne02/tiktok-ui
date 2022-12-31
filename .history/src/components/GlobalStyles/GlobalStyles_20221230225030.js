import './GlobalStyles.module.scss'
import PropTypes from 'prop-types'
import React from 'react'


function GlobalStyles({ children }) {
  return React.Children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
