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

require('./assets/css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author assalielmehdi
 */
var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: '_renderTab',
    value: function _renderTab(tab, index) {
      return _react2.default.createElement(
        'li',
        { key: _shortid2.default.generate(), className: 'nav-item' },
        _react2.default.createElement(
          'a',
          { className: 'nav-link', 'data-toggle': 'tab', href: '#id-' + (index + 1),
            role: 'tab', 'aria-controls': 'home', 'aria-selected': 'false' },
          tab
        )
      );
    }
  }, {
    key: '_renderTabs',
    value: function _renderTabs(tabs) {
      return tabs.map(this._renderTab);
    }
  }, {
    key: '_extractTabs',
    value: function _extractTabs(components) {
      return components.map(function (c) {
        return c.tab;
      });
    }
  }, {
    key: '_extractContents',
    value: function _extractContents(components) {
      return components.map(function (c) {
        return c.content;
      });
    }
  }, {
    key: '_renderContent',
    value: function _renderContent(content, index) {
      return _react2.default.createElement(
        'div',
        { key: _shortid2.default.generate(), className: 'tab-pane fade', id: 'id-' + (index + 1), role: 'tabpanel' },
        content
      );
    }
  }, {
    key: '_renderContents',
    value: function _renderContents(contents) {
      return contents.map(this._renderContent);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _index.getClasses)(this.props.classes) },
        _react2.default.createElement(
          'ul',
          { className: 'nav nav-tabs', role: 'tablist' },
          this._renderTabs(this._extractTabs(this.props.components))
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content' },
          this._renderContents(this._extractContents(this.props.components))
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

exports.default = Tabs;


Tabs.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  components: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

Tabs.defaultProps = {
  components: []
};