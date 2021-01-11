import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getClasses} from '../../Helpers/index';
import './css/style.css';

import shortid from 'shortid';

class MultiBars extends Component {
  constructor(props) {
    super(props);
    this._renderSingleBar = this._renderSingleBar.bind(this);
  }

  _getSize() {
    return (['xs', 'sm', 'md', 'lg'].includes(this.props.size) && this.props.size) || this.defaultProps.size;
  }

  _getBarText(value) {
    return ['md', 'lg'].includes(this._getSize()) && value;
  }

  _getColorClass(color) {
    const colors = {
      gray: 'bg-gray',
      yellow: 'bg-warning',
      red: 'bg-red',
      green: 'bg-green'
    };
    return Object.keys(colors).includes(color) ? colors[color] : '';
  }

  _normalizeValues(bars) {
    const sum = bars.reduce((cum, bar) => cum + bar.value, 0);
    return bars.map(bar => ({color: bar.color, value: ((bar.value * 100) / sum) | 0}));
  }

  _renderMultiBar(bars) {
    return this._normalizeValues(bars).map(this._renderSingleBar);
  }

  _renderSingleBar({value, color}) {
    const barStyle = {
      width: `${value}%`
    };
    return (
      <div className={`progress-bar ${this._getColorClass(color)}`} style={barStyle} key={shortid.generate()}>
        {this._getBarText(`${value}%`)}
      </div>
    );
  }

  render() {
    return (
      <div className={getClasses(`progress progress-${this._getSize()}`, this.props.classes, 'multibar')}>
        {this._renderMultiBar(this.props.bars)}
      </div>
    );
  }
}

MultiBars.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  size: PropTypes.string,
  bars: PropTypes.array
};

MultiBars.defaultProps = {
  classes: [],
  size: 'lg',
  bars: []
};

export default MultiBars;