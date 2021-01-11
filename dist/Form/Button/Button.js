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

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: '_buildClasses',
    value: function _buildClasses() {
      var classes = ['btn'];
      if (this.props.floating) {
        classes.push('bmd-btn-fab');
      } else {
        var size = 'btn-' + this.props.size;
        classes.push(size);
      }
      if (this.props.disabled) {
        classes.push('disabled');
      }
      if (this.props.outlined) {
        classes.push('btn-outline-' + this.props.type);
      } else {
        classes.push('btn-' + this.props.type);
      }
      if (this.props.raised) {
        classes.push('btn-raised');
      }
      if (this.props.active) {
        classes.push('active');
      }
      if (this.props.block) {
        classes.push('btn-block');
      }
      return classes.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { type: 'button',
          className: (0, _Helpers.getClasses)(this._buildClasses(), this.props.classes),
          'data-toggle': this.props.dataToggle,
          'data-target': '#' + this.props.dataTarget,
          'aria-pressed': this.props.pressed },
        this.props.ButtonName || this.props.children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.defaultProps = {
  type: 'default',
  size: 'sm'
};

Button.propTypes = {
  type: _propTypes2.default.string,
  ButtonName: _propTypes2.default.string,
  size: _propTypes2.default.string
};

exports.default = Button;