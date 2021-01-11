import React, {Component} from "react";
import PropTypes from 'prop-types';
import {getClasses} from "../../Helpers/index";

class Block extends Component {
  render() {
    return (
      <p className={getClasses("blockquote", this.props.classes)}
         block={this.props.block}>
        {this.props.content || this.props.children}
      </p>
    );
  }
}

Block.defaultProps = {
  block: '',
  content: '',
};

Block.propTypes = {
  block: PropTypes.string,
  content: PropTypes.string,
};

export default Block;