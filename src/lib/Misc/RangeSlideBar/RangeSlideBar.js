import React, {Component} from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';

import 'react-input-range/lib/css/index.css';
import './assets/css/index.css';

export default class RangeSlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.min,
      max: props.max,
      value: props.value,
      label: ''
    };
    this.onRangeChange = this.onRangeChange.bind(this);
  }

  onRangeChange(value) {
    this.setState({value});
    this.setState({label: value});
    console.log(value);
  }

  render() {
    return (
      <div className='row no-padding max-width'>
        <div className='col-md-2 label no-margin'>
          Low
        </div>
        <div className='col-md-8 no-padding-left no-padding-right' style={{paddingTop: '7px'}}>
          <InputRange
            allowSameValues={true}
            maxValue={this.state.max}
            minValue={this.state.min}
            value={this.state.value}
            onChange={this.onRangeChange}
          />
        </div>
        <div className='col-md-2 label no-margin'>
          High
        </div>
      </div>
    );
  }
}

RangeSlideBar.defaultProps = {
  min: 1,
  max: 10,
  value: {
    min: 3,
    max: 7
  },
  step: 1
};

RangeSlideBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.object,
  step: PropTypes.number
};