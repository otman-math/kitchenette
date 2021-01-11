import React, {Component} from "react";
import PropTypes from 'prop-types';
import {getClasses} from "../../Helpers/index";

/**
 * @desc This is an abbreviation component using the html standard tag <abbr>.
 * @example
 * <Abbrev title={"Digimind Social"} initial={""} content={"DS"}/>
 * @see https://getbootstrap.com/
 * @todo some cleanup and more tests
 */
class Abbrev extends Component {

	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<abbr className={getClasses(this.props.initial, this.props.classes)} title={this.props.title}>
				{this.props.content || this.props.children}
			</abbr>
		);
	}
}

Abbrev.defaultProps = {
	title: '',
	initial: ''
};

Abbrev.propTypes = {
	title: PropTypes.string.isRequired,
	initial: PropTypes.string
};

export default Abbrev;
