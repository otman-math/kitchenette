'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./assets/css/index.css');

var _user = require('./assets/img/user.jpg');

var _user2 = _interopRequireDefault(_user);

var _Helpers = require('../../Helpers');

var _MediaIcon = require('../../Media/MediaIcon/MediaIcon');

var _MediaIcon2 = _interopRequireDefault(_MediaIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfluencerMediaOverlap = function (_Component) {
  _inherits(InfluencerMediaOverlap, _Component);

  function InfluencerMediaOverlap(props) {
    _classCallCheck(this, InfluencerMediaOverlap);

    var _this = _possibleConstructorReturn(this, (InfluencerMediaOverlap.__proto__ || Object.getPrototypeOf(InfluencerMediaOverlap)).call(this, props));

    _this._onImageLoadError = _this._onImageLoadError.bind(_this);
    return _this;
  }

  _createClass(InfluencerMediaOverlap, [{
    key: '_onImageLoadError',
    value: function _onImageLoadError(e) {
      e.target.src = InfluencerMediaOverlap.defaultProps.src;
    }
  }, {
    key: '_getImageSizeClassName',
    value: function _getImageSizeClassName() {
      return 'img-' + this.props.size;
    }
  }, {
    key: '_getMediaIconClassName',
    value: function _getMediaIconClassName() {
      return 'media-' + this.props.mediaPosition;
    }
  }, {
    key: '_computeMediaIconSize',
    value: function _computeMediaIconSize() {
      return this.props.size / 4;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'figure',
        { className: (0, _Helpers.getClasses)('figure', 'media-container', this._getImageSizeClassName(), this.props.classes) },
        _react2.default.createElement('img', { src: this.props.src, alt: this.props.alt,
          className: 'figure-img img-fluid',
          onError: this._onImageLoadError }),
        _react2.default.createElement(_MediaIcon2.default, { size: this._computeMediaIconSize(), mediaType: this.props.mediaType,
          classes: this._getMediaIconClassName() })
      );
    }
  }]);

  return InfluencerMediaOverlap;
}(_react.Component);

InfluencerMediaOverlap.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  alt: _propTypes2.default.string,
  src: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  mediaType: _propTypes2.default.string,
  mediaPosition: _propTypes2.default.string
};

InfluencerMediaOverlap.defaultProps = {
  classes: [],
  alt: 'Influencer media',
  src: _user2.default,
  size: '64',
  mediaType: 'twitter',
  mediaPosition: 'tl'
};

exports.default = InfluencerMediaOverlap;