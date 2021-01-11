import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";
import YoutubePlayer from "../../Media/YoutubePlayer/YoutubePlayer";

class Mention extends Component {

	render() {
		return (

			<div className={getClasses("media", this.props.classes)}>
				<img className={getClasses("mr-3", this.props.img)}
				     src={this.props.src}
				     alt={this.props.alt}/>
				<div className={getClasses("media-body", this.props.media)}>
					<h5 className="mt-0">{this.props.title}</h5>
					<p>{this.props.text || this.props.children}</p>
					<YoutubePlayer id='AfWYO8t7ed4'/>
					<br/>
				</div>
			</div>


		);
	}
}

Mention.defaultProps = {
	src: 'test.png',
	name: 'button',
};

Mention.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
};

export default Mention;


