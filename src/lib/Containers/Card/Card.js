import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getClasses} from '../../Helpers/index';

/**
 * @author El Mehdi ASSALI
 */
export default class Card extends Component {
  render() {
    return (
      <div className={getClasses('card', this.props.classes)}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
};