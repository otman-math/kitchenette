'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');

var _freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('material-design-icons/iconfont/material-icons.css');

var _Helpers = require('../Helpers/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author: Faiçal BAKI <faical.baki@digimind.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @see:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @todo:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas, _freeBrandsSvgIcons.fab, _freeRegularSvgIcons.far);

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.state = {
      styles: {
        fontSize: _this.props.size || "initial"
      }
    };
    return _this;
  }

  // TODO
  // type -> type
  // type -> collection

  /**
   *
   * @returns {string}
   * @private
   */


  _createClass(Icon, [{
    key: '_getPrefix',
    value: function _getPrefix() {
      switch (this.props.collection) {
        case "brand":
          return 'fab';
        case "solid":
          return 'fas';
        default:
          return 'far'; // regular.
      }
    }

    /**
     *
     * @returns {*|string}
     * @private
     */

  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return this.props.icon || "coffee";
    }

    /**
     *
     * @returns {Icon.state.styles|{fontSize}}
     * @private
     */

  }, {
    key: '_getStyle',
    value: function _getStyle() {
      return this.state.styles;
    }

    /**
     * Renders font awesome icon if fa prop is provided as value of type.
     *
     * @returns {*}
     * @private
     */

  }, {
    key: '_renderFaIcon',
    value: function _renderFaIcon() {
      return this.props.type === 'fa' && _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: [this._getPrefix(), this._getIcon()],
        style: this._getStyle(),
        className: (0, _Helpers.getClasses)(this.props.classes)
      });
    }

    /**
     * Renders material design icon if md is provided as value of type.
     *
     * @returns {string|*}
     * @private
     */

  }, {
    key: '_renderMdIcon',
    value: function _renderMdIcon() {
      return this.props.type === 'md' && _react2.default.createElement(
        'i',
        { className: (0, _Helpers.getClasses)('material-icons', this.props.classes), style: this._getStyle() },
        this._getIcon()
      );
    }

    /**
     * @see https://github.com/FortAwesome/react-fontawesome
     * @returns {*}
     */

  }, {
    key: 'render',
    value: function render() {
      return this._renderMdIcon() || this._renderFaIcon();
    }
  }]);

  return Icon;
}(_react.Component);

/**
 *
 * @type {{collection: shim}}
 */


Icon.propTypes = {
  collection: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired
};

/**
 *
 * @type {{collection: string}}
 */
Icon.defaultProps = {
  collection: "regular"
};

exports.default = Icon;