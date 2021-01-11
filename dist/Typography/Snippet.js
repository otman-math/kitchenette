'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

require('highlight.js/styles/atom-one-dark.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Snippet = function (_Component) {
	_inherits(Snippet, _Component);

	function Snippet() {
		_classCallCheck(this, Snippet);

		return _possibleConstructorReturn(this, (Snippet.__proto__ || Object.getPrototypeOf(Snippet)).apply(this, arguments));
	}

	_createClass(Snippet, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_highlight2.default.initHighlightingOnLoad();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'pre',
				null,
				_react2.default.createElement(
					'code',
					{ className: this.props.lang ? this.props.lang : "html" },
					this.props.code
				)
			);
		}
	}]);

	return Snippet;
}(_react.Component);

exports.default = Snippet;