'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_Component) {
	_inherits(Toggle, _Component);

	function Toggle(props) {
		_classCallCheck(this, Toggle);

		var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

		_this._handleChange = _this._handleChange.bind(_this);
		return _this;
	}

	_createClass(Toggle, [{
		key: '_buildClasses',
		value: function _buildClasses() {
			var classes = ['slider'];

			if (this.props.rounded) {
				classes.push('slider round');
			}
			return classes.join(" ");
		}
	}, {
		key: '_handleChange',
		value: function _handleChange(e) {}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'label',
				{ className: 'switch' },
				_react2.default.createElement('input', { type: 'checkbox', defaultChecked: this.props.checked, onChange: this._handleChange() }),
				_react2.default.createElement('span', { className: this._buildClasses() })
			);
		}
	}]);

	return Toggle;
}(_react.Component);

Toggle.defaultProps = {};

Toggle.propTypes = {};

exports.default = Toggle;