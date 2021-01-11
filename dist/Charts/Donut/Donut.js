"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _highcharts = require("highcharts");

var _highcharts2 = _interopRequireDefault(_highcharts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Donut = function (_Component) {
  _inherits(Donut, _Component);

  function Donut() {
    _classCallCheck(this, Donut);

    return _possibleConstructorReturn(this, (Donut.__proto__ || Object.getPrototypeOf(Donut)).apply(this, arguments));
  }

  _createClass(Donut, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var colors = _highcharts2.default.getOptions().colors,
          categories = ["Chrome", "Firefox", "Internet Explorer", "Safari", "Edge", "Opera", "Other"],
          data = [{
        "y": 62.74,
        "color": colors[2],
        "drilldown": {
          "name": "Chrome",
          "categories": ["Chrome v65.0", "Chrome v64.0", "Chrome v63.0", "Chrome v62.0", "Chrome v61.0", "Chrome v60.0", "Chrome v59.0", "Chrome v58.0", "Chrome v57.0", "Chrome v56.0", "Chrome v55.0", "Chrome v54.0", "Chrome v51.0", "Chrome v49.0", "Chrome v48.0", "Chrome v47.0", "Chrome v43.0", "Chrome v29.0"],
          "data": [0.1, 1.3, 53.02, 1.4, 0.88, 0.56, 0.45, 0.49, 0.32, 0.29, 0.79, 0.18, 0.13, 2.16, 0.13, 0.11, 0.17, 0.26]
        }
      }, {
        "y": 10.57,
        "color": colors[1],
        "drilldown": {
          "name": "Firefox",
          "categories": ["Firefox v58.0", "Firefox v57.0", "Firefox v56.0", "Firefox v55.0", "Firefox v54.0", "Firefox v52.0", "Firefox v51.0", "Firefox v50.0", "Firefox v48.0", "Firefox v47.0"],
          "data": [1.02, 7.36, 0.35, 0.11, 0.1, 0.95, 0.15, 0.1, 0.31, 0.12]
        }
      }, {
        "y": 7.23,
        "color": colors[0],
        "drilldown": {
          "name": "Internet Explorer",
          "categories": ["Internet Explorer v11.0", "Internet Explorer v10.0", "Internet Explorer v9.0", "Internet Explorer v8.0"],
          "data": [6.2, 0.29, 0.27, 0.47]
        }
      }, {
        "y": 5.58,
        "color": colors[3],
        "drilldown": {
          "name": "Safari",
          "categories": ["Safari v11.0", "Safari v10.1", "Safari v10.0", "Safari v9.1", "Safari v9.0", "Safari v5.1"],
          "data": [3.39, 0.96, 0.36, 0.54, 0.13, 0.2]
        }
      }, {
        "y": 4.02,
        "color": colors[5],
        "drilldown": {
          "name": "Edge",
          "categories": ["Edge v16", "Edge v15", "Edge v14", "Edge v13"],
          "data": [2.6, 0.92, 0.4, 0.1]
        }
      }, {
        "y": 1.92,
        "color": colors[4],
        "drilldown": {
          "name": "Opera",
          "categories": ["Opera v50.0", "Opera v49.0", "Opera v12.1"],
          "data": [0.96, 0.82, 0.14]
        }
      }, {
        "y": 7.62,
        "color": colors[6],
        "drilldown": {
          "name": 'Other',
          "categories": ['Other'],
          "data": [7.62]
        }
      }],
          browserData = [],
          versionsData = [],
          i = void 0,
          j = void 0,
          dataLen = data.length,
          drillDataLen = void 0,
          brightness = void 0;
      for (i = 0; i < dataLen; i += 1) {
        browserData.push({
          name: categories[i],
          y: data[i].y,
          color: data[i].color
        });
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - j / drillDataLen / 5;
          versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: _highcharts2.default.Color(data[i].color).brighten(brightness).get()
          });
        }
      }
      _highcharts2.default.chart('donut-chart-container', {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Browser market share, January, 2018'
        },
        subtitle: {
          text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        yAxis: {
          title: {
            text: 'Total percent market share'
          }
        },
        plotOptions: {
          pie: {
            shadow: false,
            center: ['50%', '50%']
          }
        },
        tooltip: {
          valueSuffix: '%'
        },
        series: [{
          name: 'Browsers',
          data: browserData,
          size: '60%',
          dataLabels: {
            formatter: function formatter() {
              return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
          }
        }, {
          name: 'Versions',
          data: versionsData,
          size: '80%',
          innerSize: '60%',
          dataLabels: {
            formatter: function formatter() {
              // display only if larger than 1
              return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
            }
          },
          id: 'versions'
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 400
            },
            chartOptions: {
              series: [{
                id: 'versions',
                dataLabels: {
                  enabled: false
                }
              }]
            }
          }]
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { id: "donut-chart-container" });
    }
  }]);

  return Donut;
}(_react.Component);

exports.default = Donut;