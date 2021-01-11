import React, {Component} from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Pagination extends Component {
  _buildClasses() {
    let classes = ['pagination'];
    if (this.props.lg) {
      classes.push('pagination-lg');
    } else {
      classes.push('pagination-sm');
    }
    if (this.props.right) {
      classes.push('justify-content-end');
    }
    if (this.props.center) {
      classes.push('justify-content-center');
    }
    return classes.join(" ");
  }

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className={this._buildClasses()}>
          {this.props.page.map(function (val) {
            return (
              <li key={shortid.generate()} className="page-item">
                <a className="page-link">{val.link}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Pagination.defaultProps = {};

Pagination.propTypes = {
  link: PropTypes.string,
};

export default Pagination;
