'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _index = require('../../../Helpers/index');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author El Mehdi ASSALI
 */
var CardSubtitle = function (_Component) {
  _inherits(CardSubtitle, _Component);

  function CardSubtitle() {
    _classCallCheck(this, CardSubtitle);

    return _possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).apply(this, arguments));
  }

  _createClass(CardSubtitle, [{
    key: 'render',
    value: function render() {
      return (0, _index.renderHead)(this.props.h, this.props.children || this.props.content, (0, _index.getClasses)('card-subtitle', this.props.classes));
    }
  }]);

  return CardSubtitle;
}(_react.Component);

exports.default = CardSubtitle;


CardSubtitle.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  h: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  content: _propTypes2.default.string
};

CardSubtitle.defaultProps = {
  h: '6'
};