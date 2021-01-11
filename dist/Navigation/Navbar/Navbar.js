"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shortid = require("shortid");

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "_buildNav",
    value: function _buildNav() {
      var classes = ['navbar navbar-expand-lg'];
      var bg = "bg-" + this.props.bg;
      var type = "navbar-" + this.props.type;
      classes.push(bg);
      classes.push(type);

      return classes.join(" ");
    }
  }, {
    key: "_getNav",
    value: function _getNav() {
      return this.props.values.map(function (val) {
        return _react2.default.createElement(
          "a",
          { key: _shortid2.default.generate(),
            className: "nav-item nav-link navbar-brand",
            href: val.href },
          val.text
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { className: this._buildNav() },
        _react2.default.createElement(
          "div",
          { className: "collapse navbar-collapse",
            id: "navbarNavAltMarkup" },
          _react2.default.createElement(
            "div",
            { className: "navbar-nav" },
            this.props.values && this._getNav()
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.defaultProps = {
  type: 'dark',
  bg: 'dark',
  values: [],
  brands: []
};

Navbar.propTypes = {
  type: _propTypes2.default.string,
  bg: _propTypes2.default.string
};

exports.default = Navbar;