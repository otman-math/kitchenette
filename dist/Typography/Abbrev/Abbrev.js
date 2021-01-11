"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require("../../Helpers/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @desc This is an abbreviation component using the html standard tag <abbr>.
 * @example
 * <Abbrev title={"Digimind Social"} initial={""} content={"DS"}/>
 * @see https://getbootstrap.com/
 * @todo some cleanup and more tests
 */
var Abbrev = function (_Component) {
	_inherits(Abbrev, _Component);

	function Abbrev() {
		_classCallCheck(this, Abbrev);

		return _possibleConstructorReturn(this, (Abbrev.__proto__ || Object.getPrototypeOf(Abbrev)).apply(this, arguments));
	}

	_createClass(Abbrev, [{
		key: "render",


		/**
   *
   * @returns {*}
   */
		value: function render() {
			return _react2.default.createElement(
				"abbr",
				{ className: (0, _index.getClasses)(this.props.initial, this.props.classes), title: this.props.title },
				this.props.content || this.props.children
			);
		}
	}]);

	return Abbrev;
}(_react.Component);

Abbrev.defaultProps = {
	title: '',
	initial: ''
};

Abbrev.propTypes = {
	title: _propTypes2.default.string.isRequired,
	initial: _propTypes2.default.string
};

exports.default = Abbrev;