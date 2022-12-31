import './GlobalStyles.module.scss'
import PropTypes from 'prop-types'
import 

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
