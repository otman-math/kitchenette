'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author: Faiçal BAKI <faical.baki@gmail.com>
 * @desc: this is the sample table implementation
 * @todo: fix some bugs and write more tests
 * @why: Is it possible to add this one!!!
 */
var Table = function (_Component) {
	_inherits(Table, _Component);

	/**
  *
  * @param props
  */
	function Table(props) {
		_classCallCheck(this, Table);

		var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

		_this.state = {
			classes: ["table"]
		};
		_this._getColumn = _this._getColumn.bind(_this);
		return _this;
	}
	/**
  *
  * @param col
  * @returns {*}
  * @private
  */


	_createClass(Table, [{
		key: '_getColumn',
		value: function _getColumn(col) {
			return col.values.map(function (td) {
				return _react2.default.createElement(
					'td',
					{ key: _shortid2.default.generate() },
					td
				);
			});
		}
		/**
   *
   * @returns {*}
   * @private
   */

	}, {
		key: '_getBody',
		value: function _getBody() {
			var self = this;
			return this.props.data.map(function (col) {
				return _react2.default.createElement(
					'tr',
					{ key: _shortid2.default.generate() },
					self._getColumn(col)
				);
			});
		}

		/**
   *
   * @returns {string[]}
   * @private
   */

	}, {
		key: '_getClasses',
		value: function _getClasses() {
			var classes = this.state.classes;

			this.props.stripped && classes.push("table-stripped");
			this.props.hover && classes.push("table-hover");

			return classes.join(" ");
		}
		/**
   *
   * @returns {*}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'table-responsive' },
				_react2.default.createElement(
					'table',
					{ className: this._getClasses() },
					_react2.default.createElement(
						'caption',
						null,
						'List of users'
					),
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'th',
								{ scope: 'col' },
								'#'
							),
							_react2.default.createElement(
								'th',
								{ scope: 'col' },
								'Handle'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this._getBody()
					)
				)
			);
		}
	}]);

	return Table;
}(_react.Component);

exports.default = Table;