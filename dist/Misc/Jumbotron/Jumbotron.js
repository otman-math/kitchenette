'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jumbotron = function (_Component) {
  _inherits(Jumbotron, _Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(this, (Jumbotron.__proto__ || Object.getPrototypeOf(Jumbotron)).apply(this, arguments));
  }

  _createClass(Jumbotron, [{
    key: '_buildClasses',
    value: function _buildClasses() {
      var classes = ['jumbotron'];
      if (this.props.fluid) {
        classes.push('jumbotron-fluid');
      }
      return classes.join(" ");
    }
  }, {
    key: '_getJumbotron',
    value: function _getJumbotron() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'display-4' },
          this.props.title
        ),
        _react2.default.createElement(
          'p',
          { className: 'lead' },
          this.props.lead
        ),
        _react2.default.createElement('hr', { className: 'my-4' }),
        _react2.default.createElement(
          'p',
          null,
          this.props.paragraph
        ),
        _react2.default.createElement(
          'p',
          { className: 'lead' },
          _react2.default.createElement(
            'a',
            { className: 'btn btn-primary btn-lg', role: 'button' },
            this.props.name
          )
        )
      );
    }
  }, {
    key: '_getFluidJumbotron',
    value: function _getFluidJumbotron() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          { className: 'display-4' },
          this.props.fluidTitle
        ),
        _react2.default.createElement(
          'p',
          { className: 'lead' },
          this.props.text
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this._buildClasses() },
        this.props.jumbotron && this._getJumbotron(),
        this.props.fluidJumbotron && this._getFluidJumbotron()
      );
    }
  }]);

  return Jumbotron;
}(_react.Component);

Jumbotron.defaultProps = {
  title: 'Hello, world!',
  fluidTitle: 'Hello, world!',
  lead: 'This is a simple hero unit',
  paragraph: 'It uses utility classes for typography and spacing to space content',
  name: 'Learn more',
  fluidJumbotron: false,
  text: 'This is a modified jumbotron that occupies the entire horizontal space of its parent.',
  jumbotron: false
};

Jumbotron.propTypes = {
  paragraph: _propTypes2.default.string,
  lead: _propTypes2.default.string,
  text: _propTypes2.default.string
};

exports.default = Jumbotron;