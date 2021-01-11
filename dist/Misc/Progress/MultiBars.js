'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../Helpers/index');

require('./css/style.css');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiBars = function (_Component) {
  _inherits(MultiBars, _Component);

  function MultiBars(props) {
    _classCallCheck(this, MultiBars);

    var _this = _possibleConstructorReturn(this, (MultiBars.__proto__ || Object.getPrototypeOf(MultiBars)).call(this, props));

    _this._renderSingleBar = _this._renderSingleBar.bind(_this);
    return _this;
  }

  _createClass(MultiBars, [{
    key: '_getSize',
    value: function _getSize() {
      return ['xs', 'sm', 'md', 'lg'].includes(this.props.size) && this.props.size || this.defaultProps.size;
    }
  }, {
    key: '_getBarText',
    value: function _getBarText(value) {
      return ['md', 'lg'].includes(this._getSize()) && value;
    }
  }, {
    key: '_getColorClass',
    value: function _getColorClass(color) {
      var colors = {
        gray: 'bg-gray',
        yellow: 'bg-warning',
        red: 'bg-red',
        green: 'bg-green'
      };
      return Object.keys(colors).includes(color) ? colors[color] : '';
    }
  }, {
    key: '_normalizeValues',
    value: function _normalizeValues(bars) {
      var sum = bars.reduce(function (cum, bar) {
        return cum + bar.value;
      }, 0);
      return bars.map(function (bar) {
        return { color: bar.color, value: bar.value * 100 / sum | 0 };
      });
    }
  }, {
    key: '_renderMultiBar',
    value: function _renderMultiBar(bars) {
      return this._normalizeValues(bars).map(this._renderSingleBar);
    }
  }, {
    key: '_renderSingleBar',
    value: function _renderSingleBar(_ref) {
      var value = _ref.value,
          color = _ref.color;

      var barStyle = {
        width: value + '%'
      };
      return _react2.default.createElement(
        'div',
        { className: 'progress-bar ' + this._getColorClass(color), style: barStyle, key: _shortid2.default.generate() },
        this._getBarText(value + '%')
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _index.getClasses)('progress progress-' + this._getSize(), this.props.classes, 'multibar') },
        this._renderMultiBar(this.props.bars)
      );
    }
  }]);

  return MultiBars;
}(_react.Component);

MultiBars.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  size: _propTypes2.default.string,
  bars: _propTypes2.default.array
};

MultiBars.defaultProps = {
  classes: [],
  size: 'lg',
  bars: []
};

exports.default = MultiBars;