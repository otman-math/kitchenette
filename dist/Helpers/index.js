'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getClasses = getClasses;
exports.renderHead = renderHead;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *
 * @param classes
 * @returns {string}
 */
function getClasses() {
	for (var _len = arguments.length, classes = Array(_len), _key = 0; _key < _len; _key++) {
		classes[_key] = arguments[_key];
	}

	return classes.filter(function (className) {
		return className && Object.keys(className).length;
	}).map(function (className) {
		return typeof className === 'string' ? [className] : className;
	}).reduce(function (classes1, classes2) {
		return [].concat(_toConsumableArray(classes1), _toConsumableArray(classes2));
	}, []).join(' ');
}

/**
 *
 * @param level
 * @param content
 * @param classes
 * @returns {*}
 */
function renderHead() {
	var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
	var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Header 3';
	var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	var h = Number(level);
	switch (h) {
		case 1:
			return _react2.default.createElement(
				'h1',
				{ className: classes },
				content
			);
		case 2:
			return _react2.default.createElement(
				'h2',
				{ className: classes },
				content
			);
		case 3:
			return _react2.default.createElement(
				'h3',
				{ className: classes },
				content
			);
		case 4:
			return _react2.default.createElement(
				'h4',
				{ className: classes },
				content
			);
		case 5:
			return _react2.default.createElement(
				'h5',
				{ className: classes },
				content
			);
		default:
			return _react2.default.createElement(
				'h6',
				{ className: classes },
				content
			);
	}
}