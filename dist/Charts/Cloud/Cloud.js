'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTagcloud = require('react-tagcloud');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cloud = function (_Component) {
  _inherits(Cloud, _Component);

  function Cloud(props) {
    _classCallCheck(this, Cloud);

    var _this = _possibleConstructorReturn(this, (Cloud.__proto__ || Object.getPrototypeOf(Cloud)).call(this, props));

    _this.state = {};
    _this._handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  _createClass(Cloud, [{
    key: '_handleClick',
    value: function _handleClick(tag) {
      alert('\'' + tag.value + '\' was selected!');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactTagcloud.TagCloud, { minSize: 12, maxSize: 50, tags: this.props.data, onClick: this._handleClick });
    }
  }]);

  return Cloud;
}(_react.Component);

exports.default = Cloud;


Cloud.defaultProps = {
  data: [{ value: "JavaScript", count: 38 }, { value: "React", count: 30 }, { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 }, { value: "HTML5", count: 33 }, { value: "Linux", count: 50 }, { value: "MongoDB", count: 50 }, { value: "Swift", count: 18 }, { value: "Apple", count: 38 }, { value: "X1", count: 50 }, { value: "IBM", count: 18 }, { value: "Amazon", count: 38 }, { value: "Google", count: 50 }, { value: "Tesla", count: 38 }, { value: "CSS3", count: 20 }]
};

Cloud.propTypes = {
  data: _propTypes2.default.array
};