import {Component} from 'react';
import {getClasses, renderHead} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardTitle extends Component {
  render() {
    return renderHead(
      this.props.h,
      this.props.children || this.props.content,
      getClasses('card-title', this.props.classes)
    );
  }
}

CardTitle.propTypes = {
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

CardTitle.defaultProps = {
  h: '5'
};