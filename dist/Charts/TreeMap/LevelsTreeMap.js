'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _treemap = require('highcharts/modules/treemap');

var _treemap2 = _interopRequireDefault(_treemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LevelsTreeMap = function (_Component) {
  _inherits(LevelsTreeMap, _Component);

  function LevelsTreeMap() {
    _classCallCheck(this, LevelsTreeMap);

    return _possibleConstructorReturn(this, (LevelsTreeMap.__proto__ || Object.getPrototypeOf(LevelsTreeMap)).apply(this, arguments));
  }

  _createClass(LevelsTreeMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _treemap2.default)(_highcharts2.default);
      _highcharts2.default.chart('tree-container', {
        series: [{
          type: "treemap",
          layoutAlgorithm: 'stripes',
          alternateStartingDirection: true,
          levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
              enabled: true,
              align: 'left',
              verticalAlign: 'top',
              style: {
                fontSize: '15px',
                fontWeight: 'bold'
              }
            }
          }],
          data: [{
            id: 'A',
            name: 'Apples',
            color: "#EC2500"
          }, {
            id: 'B',
            name: 'Bananas',
            color: "#ECE100"
          }, {
            id: 'O',
            name: 'Oranges',
            color: '#EC9800'
          }, {
            name: 'Anne',
            parent: 'A',
            value: 5
          }, {
            name: 'Rick',
            parent: 'A',
            value: 3
          }, {
            name: 'Peter',
            parent: 'A',
            value: 4
          }, {
            name: 'Anne',
            parent: 'B',
            value: 4
          }, {
            name: 'Rick',
            parent: 'B',
            value: 10
          }, {
            name: 'Peter',
            parent: 'B',
            value: 1
          }, {
            name: 'Anne',
            parent: 'O',
            value: 1
          }, {
            name: 'Rick',
            parent: 'O',
            value: 3
          }, {
            name: 'Peter',
            parent: 'O',
            value: 3
          }, {
            name: 'Susanne',
            parent: 'Kiwi',
            value: 2,
            color: '#9EDE00'
          }]
        }],
        title: {
          text: 'Fruit consumption'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'tree-container' });
    }
  }]);

  return LevelsTreeMap;
}(_react.Component);

exports.default = LevelsTreeMap;