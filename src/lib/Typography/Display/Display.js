import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";

class Display extends Component {
	render() {
		return (
			<div className={getClasses(`display-${this.props.level}`, this.props.classes)}>
				{this.props.content || this.props.children}
			</div>
		);
	}
}

Display.defaultProps = {
	level: 3,
	content: '',
};

Display.propTypes = {
	level: PropTypes.number,
	content: PropTypes.string,
};

export default Display;