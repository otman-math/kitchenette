import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getClasses} from '../../Helpers';

class Modal extends Component {
  _isCentered() {
    return this.props.centered ? 'modal-dialog-centered' : '';
  }

  _getSize() {
    let sizeClass = '';
    if (this.props.size !== 'md') {
      if (this.props.size === 'lg') {
        sizeClass = 'modal-lg';
      }
      if (this.props.size === 'sm') {
        sizeClass = 'modal-sm';
      }
    }
    return sizeClass;
  }

  render() {
    return (
      <div className={getClasses('modal fade', this.props.classes)} tabIndex='-1' role='dialog' id={this.props.id}>
        <div className={`modal-dialog ${this._isCentered()} ${this._getSize()}`} role='document'>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  centered: PropTypes.bool,
  size: PropTypes.string
};

Modal.defaultProps = {
  classes: [],
  centered: false,
  size: 'md'
};

export default Modal;
