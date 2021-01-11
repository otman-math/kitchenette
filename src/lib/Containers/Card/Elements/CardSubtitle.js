import {Component} from 'react';
import {getClasses, renderHead} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardSubtitle extends Component {
  render() {
    return renderHead(
      this.props.h,
      this.props.children || this.props.content,
      getClasses('card-subtitle', this.props.classes)
    );
  }
}

CardSubtitle.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  h: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  content: PropTypes.string
};

CardSubtitle.defaultProps = {
  h: '6'
};