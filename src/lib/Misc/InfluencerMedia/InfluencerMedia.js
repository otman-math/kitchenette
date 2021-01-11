import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './assets/css/index.css';
import userImage from './assets/img/user.jpg';
import {getClasses} from "../../Helpers";

class InfluencerMedia extends Component {
  constructor(props) {
    super(props);
    this._onImageLoadError = this._onImageLoadError.bind(this);
  }

  _onImageLoadError(e) {
    e.target.src = InfluencerMedia.defaultProps.src;
  }

  _getImageSizeClassName() {
    let size = String(this.props.size);
    if (!['16', '20', '24', '32', '48', '64', '128', '256'].includes(this.props.size)) {
      size = 64;
    }
    return ('img-' + size);
  }

  render() {
    return (
      <figure className={getClasses('figure', this._getImageSizeClassName(), this.props.classes)}>
        <img src={this.props.src} alt={this.props.alt}
             className='figure-img img-fluid'
             onError={this._onImageLoadError}/>
      </figure>
    );
  }
}

InfluencerMedia.defaultProps = {
  classes: [],
  alt: 'Influencer media',
  src: userImage,
  size: '64'
};

InfluencerMedia.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  alt: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default InfluencerMedia;