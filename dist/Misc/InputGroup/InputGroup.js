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

var _Icon = require("../../Typography/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroup = function (_Component) {
	_inherits(InputGroup, _Component);

	function InputGroup() {
		_classCallCheck(this, InputGroup);

		return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
	}

	_createClass(InputGroup, [{
		key: "_getCaracter",
		value: function _getCaracter() {
			return _react2.default.createElement(
				"span",
				{ className: "input-group-text" },
				_react2.default.createElement(_Icon2.default, { icon: this.props.icon, type: "solid", iconType: "fa" })
			);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: (0, _index.getClasses)("input-group", this.props.classes) },
				_react2.default.createElement(
					"div",
					{ className: "input-group-prepend" },
					this.props.icon && this._getCaracter()
				),
				_react2.default.createElement("input", { type: this.props.type, className: (0, _index.getClasses)("form-control", this.props.classes),
					defaultValue: this.props.value,
					id: this.props.id,
					checked: this.props.check,
					disabled: this.props.dis,
					placeholder: this.props.placeholder })
			);
		}
	}]);

	return InputGroup;
}(_react.Component);

InputGroup.defaultProps = {
	placeholder: 'Write ...'
};

InputGroup.propTypes = {
	placeholder: _propTypes2.default.string,
	type: _propTypes2.default.string,
	dis: _propTypes2.default.bool,
	check: _propTypes2.default.bool
};

exports.default = InputGroup;