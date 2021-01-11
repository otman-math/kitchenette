'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../Helpers/index');

require('./assets/index.css');

var _Icon = require('../../Typography/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author El Mehdi ASSALI
 */
var Facet = function (_Component) {
  _inherits(Facet, _Component);

  function Facet(props) {
    _classCallCheck(this, Facet);

    var _this = _possibleConstructorReturn(this, (Facet.__proto__ || Object.getPrototypeOf(Facet)).call(this, props));

    _this.state = {
      icon: 1,
      id: _shortid2.default.generate()
    };
    _this._changeIcon = _this._changeIcon.bind(_this);
    return _this;
  }

  _createClass(Facet, [{
    key: '_changeIcon',
    value: function _changeIcon() {
      var icon = this.state.icon ^ 1;
      this.setState({
        icon: icon
      });
    }
  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return this.props.collapsible && _react2.default.createElement(_Icon2.default, { type: 'md', classes: 'facet-icon', icon: (this.state.icon ? 'add' : 'remove') + '_circle_outline', size: 18 });
    }
  }, {
    key: '_getCollapse',
    value: function _getCollapse() {
      return this.props.collapsible ? 'collapse' : '';
    }
  }, {
    key: '_renderTitle',
    value: function _renderTitle() {
      return this.props.title && (this.props.collapsible && _react2.default.createElement(
        'div',
        { id: 'facet-title', className: (0, _index.getClasses)('col-9 no-margin', this.props.classes) },
        this.props.title.toUpperCase()
      ) || _react2.default.createElement(
        'div',
        { id: 'facet-title', className: (0, _index.getClasses)('col-lg-4 col-md-12 no-margin', this.props.classes) },
        this.props.title.toUpperCase()
      ));
    }
  }, {
    key: '_renderHeaderRight',
    value: function _renderHeaderRight() {
      if (this.props.collapsible) {
        return _react2.default.createElement(
          'div',
          { id: 'facet-right', className: (0, _index.getClasses)('col-3', 'text-right', 'no-margin') },
          this._getIcon()
        );
      } else if (this.props.bodyTop) {
        if (this.props.title) {
          return _react2.default.createElement(
            'div',
            { id: 'facet-right', className: (0, _index.getClasses)('col-lg-8', 'col-md-12', 'text-right', 'no-margin', 'facet-right') },
            this.props.body
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: (0, _index.getClasses)('col-12', 'no-padding-left') },
            this.props.body
          );
        }
      }
    }
  }, {
    key: '_renderBody',
    value: function _renderBody() {
      return !this.props.bodyTop && this.props.body;
    }
  }, {
    key: 'render',
    value: function render() {
      var Tag = this.props.collapsible ? 'a' : 'li';
      return _react2.default.createElement(
        'div',
        { id: 'facet-container' },
        _react2.default.createElement(
          Tag,
          { id: 'facet-header', className: (0, _index.getClasses)('hover list-group-item list-group-item-action padding-sm'),
            role: 'button',
            'data-toggle': this._getCollapse(),
            href: '#' + this.state.id,
            onClick: this._changeIcon },
          _react2.default.createElement(
            'div',
            { className: 'row max-width no-margin' },
            this._renderTitle(),
            this._renderHeaderRight()
          )
        ),
        !this.props.bodyTop && this.props.body && _react2.default.createElement(
          'div',
          { id: this.state.id, className: (0, _index.getClasses)('facet-body', this._getCollapse()),
            'data-toggle': this._getCollapse() },
          this.props.body
        )
      );
    }
  }]);

  return Facet;
}(_react.Component);

exports.default = Facet;


Facet.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  title: _propTypes2.default.string,
  body: _propTypes2.default.any,
  collapsible: _propTypes2.default.bool,
  bodyTop: _propTypes2.default.bool
};

Facet.defaultProps = {
  classes: []
};