import React, {Component} from "react";
import {getClasses} from "../../Helpers/index";
import PropTypes from "prop-types";

class TextArea extends Component {
  render() {
    return (
      <div className={getClasses("form-group", this.props.classes)}>
          <textarea className="form-control"
                    id={this.props.id}
                    rows={this.props.row}
                    defaultValue={this.props.description || this.props.children}/>
      </div>
    );
  }
}

TextArea.defaultProps = {
  row: '3',
};

TextArea.propTypes = {
  row: PropTypes.string,
  id: PropTypes.string,
};

export default TextArea;