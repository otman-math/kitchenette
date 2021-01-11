import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class DailymotionPlayer extends Component {
  render() {
    const id = this.props.id;
    const w = this.props.w;
    const h = this.props.h;
    const allowFullScreen = this.props.fullScreen;
    return (
      <div className={`embed-responsive embed-responsive-${w}by${h}`}>
        <iframe className='embed-responsive-item' src={`https://www.dailymotion.com/embed/video/${id}`}
                allowFullScreen={allowFullScreen} title='Dailymotion player'/>
      </div>
    );
  }
}

DailymotionPlayer.defaultProps = {
  id: '',
  h: '3',
  w: '4',
  fullScreen: false
};

DailymotionPlayer.propTypes = {
  id: PropTypes.string.isRequired,
  h: PropTypes.string,
  w: PropTypes.string,
  fullScreen: PropTypes.bool
};