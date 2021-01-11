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

var DropDown = function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown() {
    _classCallCheck(this, DropDown);

    return _possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).apply(this, arguments));
  }

  _createClass(DropDown, [{
    key: "_buildDrop",
    value: function _buildDrop() {
      var classes = ['btn-group'];
      if (this.props.up) {
        classes.push('dropup');
      }
      if (this.props.right) {
        classes.push('dropright');
      }
      if (this.props.left) {
        classes.push('dropleft');
      }
      return classes.join(" ");
    }
  }, {
    key: "_getDrop",
    value: function _getDrop() {
      return this.props.values.map(function (val) {
        return _react2.default.createElement(
          "a",
          { key: _shortid2.default.generate(), className: "dropdown-item", href: val.href },
          val.text
        );
      });
    }
  }, {
    key: "_getDropDivider",
    value: function _getDropDivider() {
      return this.props.vals.map(function (val) {
        return _react2.default.createElement(
          "a",
          { key: _shortid2.default.generate(), className: "dropdown-item", href: val.href },
          val.text
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: this._buildDrop() },
        _react2.default.createElement(
          "button",
          { type: "button",
            className: "btn btn-" + this.props.type + " btn-" + this.props.size + " dropdown-toggle dropdown-toggle-" + this.props.split,
            "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
          this.props.buttonName || this.props.children
        ),
        _react2.default.createElement(
          "div",
          { className: "dropdown-menu" },
          this.props.values && this._getDrop(),
          _react2.default.createElement("div", { className: "dropdown-divider" }),
          this.props.vals && this._getDropDivider()
        )
      );
    }
  }]);

  return DropDown;
}(_react.Component);

DropDown.defaultProps = {
  size: 'lg',
  type: 'success'
};
DropDown.propTypes = {
  type: _propTypes2.default.string,
  size: _propTypes2.default.string,
  buttonName: _propTypes2.default.string
};

exports.default = DropDown;