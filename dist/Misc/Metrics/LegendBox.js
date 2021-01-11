'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../../Typography/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _index = require('../../Helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var LegendBox = function (_Component) {
  _inherits(LegendBox, _Component);

  function LegendBox() {
    _classCallCheck(this, LegendBox);

    return _possibleConstructorReturn(this, (LegendBox.__proto__ || Object.getPrototypeOf(LegendBox)).apply(this, arguments));
  }

  _createClass(LegendBox, [{
    key: '_getColorClass',
    value: function _getColorClass(label) {
      label = label.toLowerCase();
      switch (label) {
        case 'negative':
          return 'color-red';
        case 'positive':
          return 'color-green';
        case 'neutral':
        default:
          return 'color-gray';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'col-md-2' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-3 text-center no-padding text-secondary' },
            _react2.default.createElement(_Icon2.default, {
              classes: this._getColorClass(this.props.label),
              collection: this.props.icon.type,
              icon: this.props.icon.icon,
              size: this.props.icon.size,
              type: 'fa' }),
            _react2.default.createElement(
              'h3',
              { className: (0, _index.getClasses)('uppercase text-secondary', this._getColorClass(this.props.label)) },
              this.props.value
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-9 no-padding' },
            _react2.default.createElement(
              'h5',
              { className: (0, _index.getClasses)('uppercase no-margin text-secondary', this._getColorClass(this.props.label)) },
              this.props.label
            ),
            _react2.default.createElement(
              'p',
              { className: 'no-margin txt-xs text-muted capitalize' },
              this.props.subLabel
            )
          )
        )
      );
    }
  }]);

  return LegendBox;
}(_react.Component);

/*LegendBox.prototype = {
	label: PropTypes.string,
	subLabel: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.object
};

LegendBox.defaultProps = {
	label: 'Negative',
	subLabel: 'Mentions',
	value: '3 K',
	icon: {
		icon: 'grin-beam',
		type: 'regular',
		size: 40
	}
};*/

exports.default = LegendBox;