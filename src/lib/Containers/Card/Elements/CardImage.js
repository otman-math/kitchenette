import React, {Component} from 'react';
import {getClasses} from '../../../Helpers/index';
import PropTypes from 'prop-types';
import imageNotFound from '../assets/img/pageNotFound.png';

/**
 * @author El Mehdi ASSALI
 */
export default class CardImage extends Component {
  _getClassName() {
    return this.props.top ? 'card-img-top' : 'card-img-bottom';
  }

  render() {
    return (
      <img className={getClasses(this._getClassName(), this.props.classes)}
           src={this.props.src} alt={this.props.alt} height={this.props.height}/>
    );
  }
}

CardImage.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  alt: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

CardImage.defaultProps = {
  alt: 'Card image',
  src: imageNotFound,
  top: true,
  bottom: false,
  height: '200px'
};