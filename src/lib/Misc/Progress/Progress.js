import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/style.css';

/**
 *
 */
class Progress extends Component {
	/**
	 *
	 * @param props
	 */
	constructor (props) {
		super (props);
		this.state = {
			value: this.props.value,
			showLabel: this.props.showLabel,
			size: this.props.size, // xs, sm, md, lg for hights
			striped: this.props.striped,
			animated: this.props.animated,
			color: this.props.color
		};
	}

	/**
	 *
	 * @returns {string}
	 * @private
	 */
	_buildClasses () {
		let classes = ['progress-bar'];
		let fill    = `w-${this.state.value}`;
		let color   = `bg-${this.state.color}`;

		classes.push(fill);
		classes.push(color);

		if(this.state.striped) {
			//classes.push('progress-bar-striped');
		}
		if(this.state.animated){
			//classes.push('progress-bar-animated');
		}
		return classes.join(" ");
	}

	/**
	 *
	 * @returns {*}
	 */
	render() {

		let classes = ['progress'];
		let size    = `progress-${this.state.size}`;
		classes.push(size);

		return (
			<div className={classes.join(" ")}>
				<div
					className={this._buildClasses()}
					role={"progressbar"}
					aria-valuenow={this.state.value}
					aria-valuemin={0}
					aria-valuemax={100}
					style={{width: `${this.state.value}%`}}
				>{this.state.showLabel ? `${this.state.value}%` : ""}</div>
			</div>
		);
	}
}

/**
 *
 * @type {{value: number, showLabel: boolean, size: string, striped: boolean, animated: boolean, color: string}}
 */
Progress.defaultProps = {
	value: 50,
	showLabel: true,
	size: 'md',
	striped: true,
	animated: true,
	color: 'primary'
};

/**
 *
 * @type {{value: shim, showLabel: shim, size: shim, striped: shim, animated: shim, color: shim}}
 */
Progress.propTypes = {
	value: PropTypes.number,
	showLabel: PropTypes.bool,
	size: PropTypes.string,
	striped: PropTypes.bool,
	animated: PropTypes.bool,
	color: PropTypes.string
};

/**
 *
 */
export default Progress;