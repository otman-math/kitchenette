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

var Spiderweb = function (_Component) {
  _inherits(Spiderweb, _Component);

  function Spiderweb() {
    _classCallCheck(this, Spiderweb);

    return _possibleConstructorReturn(this, (Spiderweb.__proto__ || Object.getPrototypeOf(Spiderweb)).apply(this, arguments));
  }

  _createClass(Spiderweb, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _highcharts2.default.chart('spiderweb-chart-container', {
        chart: {
          polar: true,
          type: 'line'
        },
        title: {
          text: 'Budget vs spending',
          x: -80
        },
        pane: {
          size: '80%'
        },
        xAxis: {
          categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 'Information Technology', 'Administration'],
          tickmarkPlacement: 'on',
          lineWidth: 0
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
        },
        tooltip: {
          shared: true,
          pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          y: 70,
          layout: 'vertical'
        },
        series: [{
          name: 'Allocated Budget',
          data: [43000, 19000, 60000, 35000, 17000, 10000],
          pointPlacement: 'on'
        }, {
          name: 'Actual Spending',
          data: [50000, 39000, 42000, 31000, 26000, 14000],
          pointPlacement: 'on'
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: "spiderweb-chart-container" });
    }
  }]);

  return Spiderweb;
}(_react.Component);

exports.default = Spiderweb;