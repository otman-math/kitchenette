"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Icon = require("../../Typography/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

require("./css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */
var LegendArrow = function (_Component) {
  _inherits(LegendArrow, _Component);

  function LegendArrow() {
    _classCallCheck(this, LegendArrow);

    return _possibleConstructorReturn(this, (LegendArrow.__proto__ || Object.getPrototypeOf(LegendArrow)).apply(this, arguments));
  }

  _createClass(LegendArrow, [{
    key: "_getLegends",


    /**
     *
     * @returns {*}
     * @private
     */
    value: function _getLegends() {
      return this.props.data.map(function (item) {
        return _react2.default.createElement(
          "div",
          { className: "legend-arrows col-2 bg-primary padding-md padding-top-bottom-lg", key: _shortid2.default.generate() },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-4 text-center no-padding text-white" },
              _react2.default.createElement(_Icon2.default, {
                collection: item.icon.type,
                icon: item.icon.icon,
                size: item.icon.size,
                type: "fa" })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-8 no-padding" },
              _react2.default.createElement(
                "h5",
                { className: "uppercase text-white no-margin" },
                item.value
              ),
              _react2.default.createElement(
                "p",
                { className: "no-margin txt-xs text-white capitalize" },
                item.subLabel
              )
            )
          )
        );
      });
    }

    /**
     *
     * @returns {*}
     */

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "row justify-content-center" },
        this._getLegends()
      );
    }
  }]);

  return LegendArrow;
}(_react.Component);

exports.default = LegendArrow;