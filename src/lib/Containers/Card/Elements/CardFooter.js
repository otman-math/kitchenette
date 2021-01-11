import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardFooter extends Component {
  render() {
    return (
      <div className={getClasses('card-footer', this.props.classes)}>
        {this.props.children || this.props.content}
      </div>
    );
  }
}

CardFooter.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};