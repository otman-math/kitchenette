import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";
import Icon from "../../Typography/Icon";

class InputGroup extends Component {
	_getCaracter() {
		return (<span className="input-group-text">
              <Icon icon={this.props.icon} type={"solid"} iconType='fa'/>
           </span>);
	}

	render() {
		return (
			<div className={getClasses("input-group", this.props.classes)}>
				<div className='input-group-prepend'>
					{this.props.icon && this._getCaracter()}

				</div>
				<input type={this.props.type} className={getClasses("form-control", this.props.classes)}
				       defaultValue={this.props.value}
				       id={this.props.id}
				       checked={this.props.check}
				       disabled={this.props.dis}
				       placeholder={this.props.placeholder}/>

			</div>
		);
	}
}

InputGroup.defaultProps = {
	placeholder: 'Write ...',
};

InputGroup.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	dis: PropTypes.bool,
	check: PropTypes.bool,
};

export default InputGroup;


