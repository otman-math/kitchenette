import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";

/**
 *
 */
class Headings extends Component {
	/**
	 *
	 * @returns {*}
	 */
	render() {
		switch (this.props.level) {
			case 1:
				return <h1 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h1>;
			case 2:
				return <h2 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h2>;
			case 3:
				return <h3 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h3>;
			case 4:
				return <h4 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h4>;
			case 5:
				return <h5 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h5>;
			default:
				return <h6 className={getClasses(`h${this.props.level}`, this.props.classes)}>{this.props.text}</h6>;
		}
	}
}

/**
 *
 * @type {{level: number, text: string}}
 */
Headings.defaultProps = {
	level: 6,
	text: "{You need to set the text prop!!}"
};

/**
 *
 * @type {{level: shim, text: shim}}
 */
Headings.propTypes = {
	level: PropTypes.number,
	text: PropTypes.string,
};

export default Headings;