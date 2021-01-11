'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../Helpers/index');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Typography/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author El Mehdi ASSALI
 */
var Element = function (_Component) {
	_inherits(Element, _Component);

	function Element() {
		_classCallCheck(this, Element);

		return _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).apply(this, arguments));
	}

	_createClass(Element, [{
		key: '_getIcon',
		value: function _getIcon() {
			return _react2.default.createElement(
				'span',
				{ className: 'mr-2' },
				_react2.default.createElement(_Icon2.default, { icon: this.props.icon, type: this.props.prefix || "brand" })
			);
		}
	}, {
		key: '_getText',
		value: function _getText() {
			return _react2.default.createElement(
				'span',
				null,
				this.props.text
			);
		}
	}, {
		key: '_getBadge',
		value: function _getBadge() {
			return _react2.default.createElement(
				'span',
				{ className: 'badge badge-pill badge-dark ml-2' },
				this.props.badge
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _index.getClasses)(null, this.props.classes) },
				this.props.icon && this._getIcon(),
				this.props.text && this._getText(),
				this.props.badge && this._getBadge()
			);
		}
	}]);

	return Element;
}(_react.Component);

exports.default = Element;
;

Element.propTypes = {
	classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
	icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	text: _propTypes2.default.string,
	badge: _propTypes2.default.string
};