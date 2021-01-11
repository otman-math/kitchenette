'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YoutubePlayer = function (_Component) {
  _inherits(YoutubePlayer, _Component);

  function YoutubePlayer() {
    _classCallCheck(this, YoutubePlayer);

    return _possibleConstructorReturn(this, (YoutubePlayer.__proto__ || Object.getPrototypeOf(YoutubePlayer)).apply(this, arguments));
  }

  _createClass(YoutubePlayer, [{
    key: 'render',
    value: function render() {
      var id = this.props.id;
      var w = this.props.w;
      var h = this.props.h;
      var allowFullScreen = this.props.fullScreen;
      return _react2.default.createElement(
        'div',
        { className: 'embed-responsive embed-responsive-' + w + 'by' + h },
        _react2.default.createElement('iframe', { className: 'embed-responsive-item', src: 'https://www.youtube.com/embed/' + id + '?rel=0',
          allowFullScreen: allowFullScreen, title: 'Youtube player' })
      );
    }
  }]);

  return YoutubePlayer;
}(_react.Component);

exports.default = YoutubePlayer;


YoutubePlayer.defaultProps = {
  id: '',
  h: '3',
  w: '4',
  fullScreen: false
};

YoutubePlayer.propTypes = {
  id: _propTypes2.default.string.isRequired,
  h: _propTypes2.default.string,
  w: _propTypes2.default.string,
  fullScreen: _propTypes2.default.bool
};