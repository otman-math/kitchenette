import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import shortId from 'shortid';
import PropTypes from 'prop-types';

/**
 * @author El Mehdi ASSALI
 */
export default class CardList extends Component {
  _renderItem(item) {
    if (item.constructor === Array) {
      return this._renderItems(item);
    } else {
      return (
        <li key={shortId.generate()} className='list-group-item'>{item}</li>
      );
    }
  }

  _renderItems(items) {
    return items.map(this._renderItem);
  }

  render() {
    return (
      <ul className={getClasses('list-group list-group-flush', this.props.classes)}>
        {this._renderItems(this.props.items)}
      </ul>
    );
  }
}

CardList.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  items: PropTypes.array
};

CardList.defaultProps = {
  items: []
};