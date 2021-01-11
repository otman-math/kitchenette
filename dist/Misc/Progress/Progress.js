'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./css/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var Progress = function (_Component) {
	_inherits(Progress, _Component);

	/**
  *
  * @param props
  */
	function Progress(props) {
		_classCallCheck(this, Progress);

		var _this = _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).call(this, props));

		_this.state = {
			value: _this.props.value,
			showLabel: _this.props.showLabel,
			size: _this.props.size, // xs, sm, md, lg for hights
			striped: _this.props.striped,
			animated: _this.props.animated,
			color: _this.props.color
		};
		return _this;
	}

	/**
  *
  * @returns {string}
  * @private
  */


	_createClass(Progress, [{
		key: '_buildClasses',
		value: function _buildClasses() {
			var classes = ['progress-bar'];
			var fill = 'w-' + this.state.value;
			var color = 'bg-' + this.state.color;

			classes.push(fill);
			classes.push(color);

			if (this.state.striped) {
				//classes.push('progress-bar-striped');
			}
			if (this.state.animated) {
				//classes.push('progress-bar-animated');
			}
			return classes.join(" ");
		}

		/**
   *
   * @returns {*}
   */

	}, {
		key: 'render',
		value: function render() {

			var classes = ['progress'];
			var size = 'progress-' + this.state.size;
			classes.push(size);

			return _react2.default.createElement(
				'div',
				{ className: classes.join(" ") },
				_react2.default.createElement(
					'div',
					{
						className: this._buildClasses(),
						role: "progressbar",
						'aria-valuenow': this.state.value,
						'aria-valuemin': 0,
						'aria-valuemax': 100,
						style: { width: this.state.value + '%' }
					},
					this.state.showLabel ? this.state.value + '%' : ""
				)
			);
		}
	}]);

	return Progress;
}(_react.Component);

/**
 *
 * @type {{value: number, showLabel: boolean, size: string, striped: boolean, animated: boolean, color: string}}
 */


Progress.defaultProps = {
	value: 50,
	showLabel: true,
	size: 'md',
	striped: true,
	animated: true,
	color: 'primary'
};

/**
 *
 * @type {{value: shim, showLabel: shim, size: shim, striped: shim, animated: shim, color: shim}}
 */
Progress.propTypes = {
	value: _propTypes2.default.number,
	showLabel: _propTypes2.default.bool,
	size: _propTypes2.default.string,
	striped: _propTypes2.default.bool,
	animated: _propTypes2.default.bool,
	color: _propTypes2.default.string
};

/**
 *
 */
exports.default = Progress;