'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pyramid = function (_Component) {
  _inherits(Pyramid, _Component);

  function Pyramid() {
    _classCallCheck(this, Pyramid);

    return _possibleConstructorReturn(this, (Pyramid.__proto__ || Object.getPrototypeOf(Pyramid)).apply(this, arguments));
  }

  _createClass(Pyramid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var categories = ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '];
      _highcharts2.default.chart('pyramid-chart-container', {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Population pyramid for Germany, 2018'
        },
        subtitle: {
          text: 'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>'
        },
        xAxis: [{
          categories: categories,
          reversed: false,
          labels: {
            step: 1
          }
        }, {
          opposite: true,
          reversed: false,
          categories: categories,
          linkedTo: 0,
          labels: {
            step: 1
          }
        }],
        yAxis: {
          title: {
            text: null
          },
          labels: {
            formatter: function formatter() {
              return Math.abs(this.value) + '%';
            }
          }
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        tooltip: {
          formatter: function formatter() {
            return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' + 'Population: ' + _highcharts2.default.numberFormat(Math.abs(this.point.y), 0);
          }
        },
        series: [{
          name: 'Male',
          data: [-2.2, -2.1, -2.2, -2.4, -2.7, -3.0, -3.3, -3.2, -2.9, -3.5, -4.4, -4.1, -3.4, -2.7, -2.3, -2.2, -1.6, -0.6, -0.3, -0.0, -0.0]
        }, {
          name: 'Female',
          data: [2.1, 2.0, 2.1, 2.3, 2.6, 2.9, 3.2, 3.1, 2.9, 3.4, 4.3, 4.0, 3.5, 2.9, 2.5, 2.7, 2.2, 1.1, 0.6, 0.2, 0.0]
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: "pyramid-chart-container" });
    }
  }]);

  return Pyramid;
}(_react.Component);

exports.default = Pyramid;