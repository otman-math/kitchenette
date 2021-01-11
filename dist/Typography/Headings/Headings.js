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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var Headings = function (_Component) {
	_inherits(Headings, _Component);

	function Headings() {
		_classCallCheck(this, Headings);

		return _possibleConstructorReturn(this, (Headings.__proto__ || Object.getPrototypeOf(Headings)).apply(this, arguments));
	}

	_createClass(Headings, [{
		key: "render",

		/**
   *
   * @returns {*}
   */
		value: function render() {
			switch (this.props.level) {
				case 1:
					return _react2.default.createElement(
						"h1",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
				case 2:
					return _react2.default.createElement(
						"h2",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
				case 3:
					return _react2.default.createElement(
						"h3",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
				case 4:
					return _react2.default.createElement(
						"h4",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
				case 5:
					return _react2.default.createElement(
						"h5",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
				default:
					return _react2.default.createElement(
						"h6",
						{ className: (0, _index.getClasses)("h" + this.props.level, this.props.classes) },
						this.props.text
					);
			}
		}
	}]);

	return Headings;
}(_react.Component);

/**
 *
 * @type {{level: number, text: string}}
 */


Headings.defaultProps = {
	level: 6,
	text: "{You need to set the text prop!!}"
};

/**
 *
 * @type {{level: shim, text: shim}}
 */
Headings.propTypes = {
	level: _propTypes2.default.number,
	text: _propTypes2.default.string
};

exports.default = Headings;