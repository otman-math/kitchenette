import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardText extends Component {
  render() {
    return (
      <p className={getClasses('card-text', this.props.classes)}>
        {this.props.children || this.props.content}
      </p>
    );
  }
}

CardText.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  content: PropTypes.string
};