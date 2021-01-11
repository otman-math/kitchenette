import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './assets/css/index.css';
import userImage from './assets/img/user.jpg';
import {getClasses} from "../../Helpers";
import MediaIcon from "../../Media/MediaIcon/MediaIcon";

class InfluencerMediaOverlap extends Component {
  constructor(props) {
    super(props);
    this._onImageLoadError = this._onImageLoadError.bind(this);
  }

  _onImageLoadError(e) {
    e.target.src = InfluencerMediaOverlap.defaultProps.src;
  }

  _getImageSizeClassName() {
    return ('img-' + this.props.size);
  }

  _getMediaIconClassName() {
    return ('media-' + this.props.mediaPosition);
  }

  _computeMediaIconSize() {
    return this.props.size / 4;
  }

  render() {
    return (
      <figure className={getClasses('figure', 'media-container', this._getImageSizeClassName(), this.props.classes)}>
        <img src={this.props.src} alt={this.props.alt}
             className='figure-img img-fluid'
             onError={this._onImageLoadError}/>
        <MediaIcon size={this._computeMediaIconSize()} mediaType={this.props.mediaType}
                   classes={this._getMediaIconClassName()}/>
      </figure>
    );
  }
}

InfluencerMediaOverlap.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  alt: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  mediaType: PropTypes.string,
  mediaPosition: PropTypes.string
};

InfluencerMediaOverlap.defaultProps = {
  classes: [],
  alt: 'Influencer media',
  src: userImage,
  size: '64',
  mediaType: 'twitter',
  mediaPosition: 'tl'
};

export default InfluencerMediaOverlap;