import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardBody extends Component {
  render() {
    return (
      <div className={getClasses('card-body', this.props.classes)}>
        {this.props.children}
      </div>
    );
  }
}

CardBody.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};