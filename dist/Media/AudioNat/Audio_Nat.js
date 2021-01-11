"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../Helpers/index");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio_Nat = function (_Component) {
  _inherits(Audio_Nat, _Component);

  function Audio_Nat() {
    _classCallCheck(this, Audio_Nat);

    return _possibleConstructorReturn(this, (Audio_Nat.__proto__ || Object.getPrototypeOf(Audio_Nat)).apply(this, arguments));
  }

  _createClass(Audio_Nat, [{
    key: "render",
    value: function render() {
      return (
        /** 
         * audio.mp3 should be in docs folder
         */
        _react2.default.createElement(
          "div",
          { className: (0, _index.getClasses)("embed-responsive embed-responsive-" + this.props.width + "by" + this.props.height, this.props.classes) },
          _react2.default.createElement(
            "audio",
            { controls: true },
            _react2.default.createElement("source", { src: this.props.src,
              type: this.props.type })
          )
        )
      );
    }
  }]);

  return Audio_Nat;
}(_react.Component);

Audio_Nat.defaultProps = {
  height: '9',
  width: '16'
};

Audio_Nat.propTypes = {
  src: _propTypes2.default.string,
  type: _propTypes2.default.string,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string
};

exports.default = Audio_Nat;