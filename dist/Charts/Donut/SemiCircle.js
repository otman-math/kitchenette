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

var SemiCircle = function (_Component) {
  _inherits(SemiCircle, _Component);

  function SemiCircle() {
    _classCallCheck(this, SemiCircle);

    return _possibleConstructorReturn(this, (SemiCircle.__proto__ || Object.getPrototypeOf(SemiCircle)).apply(this, arguments));
  }

  _createClass(SemiCircle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _highcharts2.default.chart('semi-circle-container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: 'Browser<br>shares<br>2017',
          align: 'center',
          verticalAlign: 'middle',
          y: 40
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: [['Chrome', 58.9], ['Firefox', 13.29], ['Internet Explorer', 13], ['Edge', 3.78], ['Safari', 3.42], {
            name: 'Other',
            y: 7.61,
            dataLabels: {
              enabled: false
            }
          }]
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'semi-circle-container' });
    }
  }]);

  return SemiCircle;
}(_react.Component);

exports.default = SemiCircle;