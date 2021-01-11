import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardHeader extends Component {
  render() {
    return (
      <div className={getClasses('card-header', this.props.classes)}>
        {this.props.children}
      </div>
    );
  }
}

CardHeader.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};