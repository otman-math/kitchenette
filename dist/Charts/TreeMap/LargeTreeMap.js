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

var _heatmap = require('highcharts/modules/heatmap');

var _heatmap2 = _interopRequireDefault(_heatmap);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LargeTreeMap = function (_Component) {
  _inherits(LargeTreeMap, _Component);

  function LargeTreeMap() {
    _classCallCheck(this, LargeTreeMap);

    return _possibleConstructorReturn(this, (LargeTreeMap.__proto__ || Object.getPrototypeOf(LargeTreeMap)).apply(this, arguments));
  }

  _createClass(LargeTreeMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _jquery2.default.getJSON('https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/world-mortality.json', function (data) {
        var points = [],
            regionP = void 0,
            regionVal = void 0,
            regionI = 0,
            countryP = void 0,
            countryI = void 0,
            causeP = void 0,
            causeI = void 0,
            region = void 0,
            country = void 0,
            cause = void 0,
            causeName = {
          'Communicable & other Group I': 'Communicable diseases',
          'Noncommunicable diseases': 'Non-communicable diseases',
          'Injuries': 'Injuries'
        };
        for (region in data) {
          if (data.hasOwnProperty(region)) {
            regionVal = 0;
            regionP = {
              id: 'id_' + regionI,
              name: region,
              color: _highcharts2.default.getOptions().colors[regionI]
            };
            countryI = 0;
            for (country in data[region]) {
              if (data[region].hasOwnProperty(country)) {
                countryP = {
                  id: regionP.id + '_' + countryI,
                  name: country,
                  parent: regionP.id
                };
                points.push(countryP);
                causeI = 0;
                for (cause in data[region][country]) {
                  if (data[region][country].hasOwnProperty(cause)) {
                    causeP = {
                      id: countryP.id + '_' + causeI,
                      name: causeName[cause],
                      parent: countryP.id,
                      value: Math.round(+data[region][country][cause])
                    };
                    regionVal += causeP.value;
                    points.push(causeP);
                    causeI = causeI + 1;
                  }
                }
                countryI = countryI + 1;
              }
            }
            regionP.value = Math.round(regionVal / countryI);
            points.push(regionP);
            regionI = regionI + 1;
          }
        }
        (0, _treemap2.default)(_highcharts2.default);
        (0, _heatmap2.default)(_highcharts2.default);
        _highcharts2.default.chart('large-tree-container', {
          series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
              enabled: false
            },
            levelIsConstant: false,
            levels: [{
              level: 1,
              dataLabels: {
                enabled: true
              },
              borderWidth: 3
            }],
            data: points
          }],
          subtitle: {
            text: 'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
          },
          title: {
            text: 'Global Mortality Rate 2012, per 100 000 population'
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'large-tree-container' });
    }
  }]);

  return LargeTreeMap;
}(_react.Component);

exports.default = LargeTreeMap;