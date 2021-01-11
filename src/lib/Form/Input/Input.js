import React, {Component} from "react";
import {getClasses} from "../../Helpers";
import PropTypes from "prop-types";

class Input extends Component {
  _buildClasses() {
    let classes = [];
    if (this.props.form) {
      classes.push('form-control');
    }
    return classes.join(" ");
  }

  render() {
    return (
      <input type={this.props.type}
             className={getClasses(this._buildClasses(), this.props.classes)}
             defaultValue={this.props.value}
             id={this.props.id}
             checked={this.props.check}
             disabled={this.props.dis}
             value={this.props.value}
             name={this.props.name}
             placeholder={this.props.placeholder}/>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  placeholder: 'write ..',
};

Input.propTypes = {
  type: PropTypes.string,
  indice: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
