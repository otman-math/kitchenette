"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../Helpers/index");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

var _Button = require("../../Form/Button/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var ButtonGroup = function (_Component) {
	_inherits(ButtonGroup, _Component);

	function ButtonGroup() {
		_classCallCheck(this, ButtonGroup);

		return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
	}

	_createClass(ButtonGroup, [{
		key: "render",

		/**
   *
   * @returns {*}
   */
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: (0, _index.getClasses)("btn-group btn-group-" + this.props.size, this.props.classes, 'no-margin'),
					role: "group" },
				this.props.buttons.map(function (btn) {
					return _react2.default.createElement(
						_Button2.default,
						{ type: btn.type, key: _shortid2.default.generate(), classes: "no-margin" },
						btn.text
					);
				})
			);
		}
	}]);

	return ButtonGroup;
}(_react.Component);

/**
 *
 * @type {{buttons: Array}}
 */


ButtonGroup.defaultProps = {
	buttons: []
};

/**
 *
 * @type {{buttons: shim, size: shim, type: shim}}
 */
ButtonGroup.propTypes = {
	buttons: _propTypes2.default.array,
	size: _propTypes2.default.string,
	type: _propTypes2.default.string
};

exports.default = ButtonGroup;