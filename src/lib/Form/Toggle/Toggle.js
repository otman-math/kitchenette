import React, {Component} from "react";
import '../css/style.css';

class Toggle extends Component {

	constructor(props) {
		super(props);
		this._handleChange = this._handleChange.bind(this);
	}

	_buildClasses() {
		let classes = ['slider'];

		if (this.props.rounded) {
			classes.push('slider round');
		}
		return classes.join(" ");
	}

	_handleChange(e) {

	}

	render() {
		return (

			<label className="switch">
				<input type="checkbox" defaultChecked={this.props.checked} onChange={this._handleChange()}/>
				<span className={this._buildClasses()}/>
			</label>
		);
	}
}

Toggle.defaultProps = {

};

Toggle.propTypes = {
	
};

export default Toggle;


