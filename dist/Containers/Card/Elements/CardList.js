'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../../Helpers/index');

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @author El Mehdi ASSALI
 */
var CardList = function (_Component) {
  _inherits(CardList, _Component);

  function CardList() {
    _classCallCheck(this, CardList);

    return _possibleConstructorReturn(this, (CardList.__proto__ || Object.getPrototypeOf(CardList)).apply(this, arguments));
  }

  _createClass(CardList, [{
    key: '_renderItem',
    value: function _renderItem(item) {
      if (item.constructor === Array) {
        return this._renderItems(item);
      } else {
        return _react2.default.createElement(
          'li',
          { key: _shortid2.default.generate(), className: 'list-group-item' },
          item
        );
      }
    }
  }, {
    key: '_renderItems',
    value: function _renderItems(items) {
      return items.map(this._renderItem);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: (0, _index.getClasses)('list-group list-group-flush', this.props.classes) },
        this._renderItems(this.props.items)
      );
    }
  }]);

  return CardList;
}(_react.Component);

exports.default = CardList;


CardList.propTypes = {
  classes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  items: _propTypes2.default.array
};

CardList.defaultProps = {
  items: []
};