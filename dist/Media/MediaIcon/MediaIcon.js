'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _twitter_logo = require('../assets/twitter_logo.png');

var _twitter_logo2 = _interopRequireDefault(_twitter_logo);

var _facebook_logo = require('../assets/facebook_logo.png');

var _facebook_logo2 = _interopRequireDefault(_facebook_logo);

var _instagram_logo = require('../assets/instagram_logo.png');

var _instagram_logo2 = _interopRequireDefault(_instagram_logo);

var _youtube_logo = require('../assets/youtube_logo.png');

var _youtube_logo2 = _interopRequireDefault(_youtube_logo);

var _index = require('../../Helpers/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MediaIcon = function (_Component) {
	_inherits(MediaIcon, _Component);

	function MediaIcon() {
		_classCallCheck(this, MediaIcon);

		return _possibleConstructorReturn(this, (MediaIcon.__proto__ || Object.getPrototypeOf(MediaIcon)).apply(this, arguments));
	}

	_createClass(MediaIcon, [{
		key: '_getMediaTypeLogo',
		value: function _getMediaTypeLogo(brand) {
			switch (brand) {
				case "twitter":
					return _twitter_logo2.default;
				case "instagram":
					return _instagram_logo2.default;
				case "facebook":
					return _facebook_logo2.default;
				case "youtube":
					return _youtube_logo2.default;
				default:
					return _youtube_logo2.default;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('img', {
				src: this._getMediaTypeLogo(this.props.mediaType),
				alt: this.props.mediaType,
				width: this.props.size,
				className: (0, _index.getClasses)(this.props.classes)
			});
		}
	}]);

	return MediaIcon;
}(_react.Component);

MediaIcon.defaultProps = {
	src: "",
	alt: ""
};

MediaIcon.propTypes = {
	size: _propTypes2.default.number
};

exports.default = MediaIcon;