'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactInputRange = require('react-input-range');

var _reactInputRange2 = _interopRequireDefault(_reactInputRange);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('react-input-range/lib/css/index.css');

require('./assets/css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeSlideBar = function (_Component) {
  _inherits(RangeSlideBar, _Component);

  function RangeSlideBar(props) {
    _classCallCheck(this, RangeSlideBar);

    var _this = _possibleConstructorReturn(this, (RangeSlideBar.__proto__ || Object.getPrototypeOf(RangeSlideBar)).call(this, props));

    _this.state = {
      min: props.min,
      max: props.max,
      value: props.value,
      label: ''
    };
    _this.onRangeChange = _this.onRangeChange.bind(_this);
    return _this;
  }

  _createClass(RangeSlideBar, [{
    key: 'onRangeChange',
    value: function onRangeChange(value) {
      this.setState({ value: value });
      this.setState({ label: value });
      console.log(value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row no-padding max-width' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-2 label no-margin' },
          'Low'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-8 no-padding-left no-padding-right', style: { paddingTop: '7px' } },
          _react2.default.createElement(_reactInputRange2.default, {
            allowSameValues: true,
            maxValue: this.state.max,
            minValue: this.state.min,
            value: this.state.value,
            onChange: this.onRangeChange
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-2 label no-margin' },
          'High'
        )
      );
    }
  }]);

  return RangeSlideBar;
}(_react.Component);

exports.default = RangeSlideBar;


RangeSlideBar.defaultProps = {
  min: 1,
  max: 10,
  value: {
    min: 3,
    max: 7
  },
  step: 1
};

RangeSlideBar.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  value: _propTypes2.default.object,
  step: _propTypes2.default.number
};