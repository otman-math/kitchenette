import React, {Component} from "react";
import PropTypes from "prop-types";

class Video_Nat extends Component {
  render() {
    return (
      /** 
      * video.mp4 should be in docs folder
      */
        <div className={`embed-responsive embed-responsive-${this.props.width}by${this.props.height}`}>
            <video controls>
                <source src={this.props.src} 
                        type={this.props.type}/>
            </video>
            <p> 
              {this.props.description} 
                <a href={this.props.href} target={this.props.target}>{this.props.link}</a>.
            </p>
        </div>
    );
  }
}

Video_Nat.defaultProps = {
  height: '9',
  width: '16',
};

Video_Nat.propTypes = {
    src : PropTypes.string,
    type : PropTypes.string,
    href : PropTypes.string,
    target : PropTypes.string,
    height : PropTypes.string,
    width : PropTypes.string,
    descrip : PropTypes.string,
    link : PropTypes.string,
};
 
export default Video_Nat;


