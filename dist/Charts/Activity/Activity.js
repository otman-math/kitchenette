'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highcharts = require('highcharts');

var _highcharts2 = _interopRequireDefault(_highcharts);

var _highchartsMore = require('highcharts/highcharts-more');

var _highchartsMore2 = _interopRequireDefault(_highchartsMore);

var _solidGauge = require('highcharts/modules/solid-gauge');

var _solidGauge2 = _interopRequireDefault(_solidGauge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activity = function (_Component) {
  _inherits(Activity, _Component);

  function Activity() {
    _classCallCheck(this, Activity);

    return _possibleConstructorReturn(this, (Activity.__proto__ || Object.getPrototypeOf(Activity)).apply(this, arguments));
  }

  _createClass(Activity, [{
    key: '_renderIcons',
    value: function _renderIcons() {
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8]).attr({
          'stroke': '#303030',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          'zIndex': 10
        }).add(this.series[2].group);
      }
      this.series[0].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2);
      if (!this.series[1].icon) {
        var arr = ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8];
        this.series[1].icon = this.renderer.path(arr).attr({
          'stroke': '#ffffff',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          'zIndex': 10
        }).add(this.series[2].group);
      }
      this.series[1].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR - (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2);
      if (!this.series[2].icon) {
        this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0]).attr({
          'stroke': '#303030',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          'zIndex': 10
        }).add(this.series[2].group);
      }
      this.series[2].icon.translate(this.chartWidth / 2 - 10, this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR - (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _highchartsMore2.default)(_highcharts2.default);
      (0, _solidGauge2.default)(_highcharts2.default);
      _highcharts2.default.chart('activity-chart', {
        chart: {
          type: 'solidgauge',
          height: '110%',
          events: {
            render: this._renderIcons
          }
        },
        title: {
          text: 'Activity',
          style: {
            fontSize: '24px'
          }
        },
        tooltip: {
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          style: {
            fontSize: '16px'
          },
          pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
          positioner: function positioner(labelWidth) {
            return {
              x: (this.chart.chartWidth - labelWidth) / 2,
              y: this.chart.plotHeight / 2 + 15
            };
          }
        },
        pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: _highcharts2.default.Color(_highcharts2.default.getOptions().colors[0]).setOpacity(0.3).get(),
            borderWidth: 0
          }, {
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: _highcharts2.default.Color(_highcharts2.default.getOptions().colors[1]).setOpacity(0.3).get(),
            borderWidth: 0
          }, {
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: _highcharts2.default.Color(_highcharts2.default.getOptions().colors[2]).setOpacity(0.3).get(),
            borderWidth: 0
          }]
        },
        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
        },
        plotOptions: {
          solidgauge: {
            dataLabels: {
              enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
          }
        },
        series: [{
          name: 'Move',
          data: [{
            color: _highcharts2.default.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
          }]
        }, {
          name: 'Exercise',
          data: [{
            color: _highcharts2.default.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
          }]
        }, {
          name: 'Stand',
          data: [{
            color: _highcharts2.default.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
          }]
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'activity-chart' });
    }
  }]);

  return Activity;
}(_react.Component);

exports.default = Activity;