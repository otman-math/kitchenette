import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";
import shortid from 'shortid';
import Button from "../../Form/Button/Button";


/**
 *
 */
class ButtonGroup extends Component {
	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className={getClasses(`btn-group btn-group-${this.props.size}`, this.props.classes, 'no-margin')}
			     role="group">
				{this.props.buttons.map(function(btn){
				return (
					<Button type={btn.type} key={shortid.generate()} classes='no-margin'>
						{btn.text}
					</Button>
				);
			})}
			</div>
		);
	}
}

/**
 *
 * @type {{buttons: Array}}
 */
ButtonGroup.defaultProps = {
	buttons: [],
};

/**
 *
 * @type {{buttons: shim, size: shim, type: shim}}
 */
ButtonGroup.propTypes = {
	buttons: PropTypes.array,
	size: PropTypes.string,
	type: PropTypes.string,
};

export default ButtonGroup;