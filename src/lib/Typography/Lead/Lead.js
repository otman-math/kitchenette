import React, {Component} from "react";
import PropTypes from 'prop-types';
import {getClasses} from "../../Helpers/index";

class Lead extends Component {
  render() {
    return (
      <p className={getClasses("lead", this.props.classes)}>
        {this.props.content || this.props.children}
      </p>
    );
  }
}
Lead.defaultProps = {
  content: '',
};

Lead.propTypes = {
  content: PropTypes.string,
};

export default Lead;