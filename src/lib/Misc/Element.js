import React, {Component} from 'react';
import {getClasses} from '../Helpers/index';
import PropTypes from 'prop-types';
import Icon from "../Typography/Icon";

/**
 * @author El Mehdi ASSALI
 */
export default class Element extends Component {
	_getIcon() {
		return <span className='mr-2'>
      <Icon icon={this.props.icon} type={this.props.prefix || "brand"}/>
    </span>;
	}

	_getText() {
		return <span>{this.props.text}</span>;
	}

	_getBadge() {
		return <span className='badge badge-pill badge-dark ml-2'>{this.props.badge}</span>;
	}

	render() {
		return (
			<div className={getClasses(null, this.props.classes)}>
				{(this.props.icon && this._getIcon())}
				{(this.props.text && this._getText())}
				{(this.props.badge && this._getBadge())}
			</div>
		);
	}
};

Element.propTypes = {
	classes: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	text: PropTypes.string,
	badge: PropTypes.string
};