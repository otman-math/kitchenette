import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardLink extends Component {
  render() {
    return (
      <a
        className={getClasses('card-link', this.props.classes)}
        href={this.props.href}>{this.props.children || this.props.content}</a>
    );
  }
}

CardLink.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

CardLink.defaultProps = {
  href: '#',
};