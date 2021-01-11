'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../../Helpers/index');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageNotFound = require('../assets/img/pageNotFound.png');

var _pageNotFound2 = _interopRequireDefault(_pageNotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author El Mehdi ASSALI
 */
var CardImage = function (_Component) {
  _inherits(CardImage, _Component);

  function CardImage() {
    _classCallCheck(this, CardImage);

    return _possibleConstructorReturn(this, (CardImage.__proto__ || Object.getPrototypeOf(CardImage)).apply(this, arguments));
  }

  _createClass(CardImage, [{
    key: '_getClassName',
    value: function _getClassName() {
      return this.props.top ? 'card-img-top' : 'card-img-bottom';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('img', { className: (0, _index.getClasses)(this._getClassName(), this.props.classes),
        src: this.props.src, alt: this.props.alt, height: this.props.height });
    }
  }]);

  return CardImage;
}(_react.Component);

exports.default = CardImage;


CardImage.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  alt: _propTypes2.default.string,
  top: _propTypes2.default.bool,
  bottom: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

CardImage.defaultProps = {
  alt: 'Card image',
  src: _pageNotFound2.default,
  top: true,
  bottom: false,
  height: '200px'
};