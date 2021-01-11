import React, {Component} from "react";
import PropTypes from 'prop-types';
import twitterLogo from '../assets/twitter_logo.png';
import facebookLogo from '../assets/facebook_logo.png';
import instagramLogo from '../assets/instagram_logo.png';
import youtubeLogo from '../assets/youtube_logo.png';
import placeholder from '../assets/youtube_logo.png';

import {getClasses} from "../../Helpers/index";

class MediaIcon extends Component {

	_getMediaTypeLogo(brand){
		switch (brand) {
			case "twitter":
				return twitterLogo;
			case "instagram":
				return instagramLogo;
			case "facebook":
				return facebookLogo;
			case "youtube":
				return youtubeLogo;
			default :
				return placeholder;
		}
	}

  render() {
    return (
      <img
        src={this._getMediaTypeLogo(this.props.mediaType)}
        alt={this.props.mediaType}
        width={this.props.size}
        className={getClasses(this.props.classes)}
      />
    )
  }
}

MediaIcon.defaultProps = {
  src: "",
  alt : "",
};

MediaIcon.propTypes = {
  size: PropTypes.number,
};

export default MediaIcon;
