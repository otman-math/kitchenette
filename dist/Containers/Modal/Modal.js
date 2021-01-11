'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Helpers = require('../../Helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: '_isCentered',
    value: function _isCentered() {
      return this.props.centered ? 'modal-dialog-centered' : '';
    }
  }, {
    key: '_getSize',
    value: function _getSize() {
      var sizeClass = '';
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
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _Helpers.getClasses)('modal fade', this.props.classes), tabIndex: '-1', role: 'dialog', id: this.props.id },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog ' + this._isCentered() + ' ' + this._getSize(), role: 'document' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            this.props.children
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  id: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  centered: _propTypes2.default.bool,
  size: _propTypes2.default.string
};

Modal.defaultProps = {
  classes: [],
  centered: false,
  size: 'md'
};

exports.default = Modal;