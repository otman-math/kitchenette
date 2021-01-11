import React, {Component} from 'react';
import PropTypes from "prop-types";

export default class VimeoPlayer extends Component {
  render() {
    const id = this.props.id;
    const w = this.props.w;
    const h = this.props.h;
    const allowFullScreen = this.props.fullScreen;
    return (
      <div className={`embed-responsive embed-responsive-${w}by${h}`}>
        <iframe className="embed-responsive-item" src={`https://player.vimeo.com/video/${id}`}
                allowFullScreen={allowFullScreen} title='Vimeo player'/>
      </div>
    );
  }
}

VimeoPlayer.defaultProps = {
  id: '',
  h: '3',
  w: '4',
  fullScreen: false
};

VimeoPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  h: PropTypes.string,
  w: PropTypes.string,
  fullScreen: PropTypes.bool
};