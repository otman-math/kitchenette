import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class YoutubePlayer extends Component {
  render() {
    const id = this.props.id;
    const w = this.props.w;
    const h = this.props.h;
    const allowFullScreen = this.props.fullScreen;
    return (
      <div className={`embed-responsive embed-responsive-${w}by${h}`}>
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${id}?rel=0`}
                allowFullScreen={allowFullScreen} title='Youtube player'/>
      </div>
    );
  }
}

YoutubePlayer.defaultProps = {
  id: '',
  h: '3',
  w: '4',
  fullScreen: false
};

YoutubePlayer.propTypes = {
  id: PropTypes.string.isRequired,
  h: PropTypes.string,
  w: PropTypes.string,
  fullScreen: PropTypes.bool
};
