/**
 *
 * @author: Faiçal BAKI <faical.baki@digimind.com>
 * @desc:
 * @see:
 * @todo:
 *
 */

import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import 'material-design-icons/iconfont/material-icons.css';

import {getClasses} from '../Helpers/';

library.add(fas, fab, far);

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        fontSize: this.props.size || "initial"
      }
    }
  }

  // TODO
  // type -> type
  // type -> collection

  /**
   *
   * @returns {string}
   * @private
   */
  _getPrefix() {
    switch (this.props.collection) {
      case "brand":
        return 'fab';
      case "solid":
        return 'fas';
      default:
        return 'far'; // regular.
    }
  }

  /**
   *
   * @returns {*|string}
   * @private
   */
  _getIcon() {
    return this.props.icon || "coffee";
  }

  /**
   *
   * @returns {Icon.state.styles|{fontSize}}
   * @private
   */
  _getStyle() {
    return this.state.styles;
  }

  /**
   * Renders font awesome icon if fa prop is provided as value of type.
   *
   * @returns {*}
   * @private
   */
  _renderFaIcon() {
    return (this.props.type === 'fa') && (
      <FontAwesomeIcon
        icon={[
          this._getPrefix(),
          this._getIcon()
        ]}
        style={this._getStyle()}
        className={getClasses(this.props.classes)}
      />
    );
  }

  /**
   * Renders material design icon if md is provided as value of type.
   *
   * @returns {string|*}
   * @private
   */
  _renderMdIcon() {
    return (this.props.type === 'md') && (
      <i className={getClasses('material-icons', this.props.classes)} style={this._getStyle()}>
        {this._getIcon()}
      </i>
    );
  }

  /**
   * @see https://github.com/FortAwesome/react-fontawesome
   * @returns {*}
   */
  render() {
    return this._renderMdIcon() || this._renderFaIcon();
  }
}

/**
 *
 * @type {{collection: shim}}
 */
Icon.propTypes = {
  collection: PropTypes.string,
  type: PropTypes.string.isRequired
};

/**
 *
 * @type {{collection: string}}
 */
Icon.defaultProps = {
  collection: "regular",
};

export default Icon;