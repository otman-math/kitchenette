import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";
import shortid from 'shortid';

class Select extends Component {
  render() {
    const options = this.props.value.map((val) =>
      <option key={shortid.generate()}>
        {val}
      </option>
    );
    return (
      <div className={getClasses("form-group", this.props.classes)}>
        <select multiple={this.props.mult}
                className={getClasses("form-control", this.props.selectClasses)}
                id={this.props.id}>
          {options}
        </select>
      </div>
    );
  }
}

Select.defaultProps = {
  mult: '',
  value : [],
};

Select.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Select;


