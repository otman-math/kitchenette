import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";

class Audio_Nat extends Component {
  render() {
    return (
     /** 
      * audio.mp3 should be in docs folder
      */
      <div className={getClasses(`embed-responsive embed-responsive-${this.props.width}by${this.props.height}`, this.props.classes)}>
        <audio controls>
          <source src={this.props.src} 
                  type={this.props.type}/>
        </audio>
      </div>
    );
  }
}

Audio_Nat.defaultProps = {
  height: '9',
  width: '16',
};

Audio_Nat.propTypes = {
    src : PropTypes.string,
    type : PropTypes.string,
    width : PropTypes.string,
    height : PropTypes.string,
};
 
export default Audio_Nat;