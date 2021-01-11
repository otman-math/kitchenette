import React, {Component} from "react";
import PropTypes from "prop-types";
import shortid from 'shortid';

class Navbar extends Component {
  _buildNav(){
    let classes = ['navbar navbar-expand-lg'];
    let bg = `bg-${this.props.bg}`;
    let type = `navbar-${this.props.type}`;
    classes.push(bg);
    classes.push(type);

    return classes.join(" ");

  }

  _getNav(){
    return this.props.values.map(val => (
      <a key={shortid.generate()}
          className="nav-item nav-link navbar-brand"
          href={val.href}>
        {val.text}
      </a>
      )
    );
  }

  render() {
    return (
          <nav className={this._buildNav()}>
            <div className="collapse navbar-collapse"
                id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {(this.props.values && this._getNav())}
              </div>
            </div>
          </nav>
    );
  }
}

Navbar.defaultProps = {
  type : 'dark',
  bg : 'dark',
  values :[],
  brands :[],
};

Navbar.propTypes = {
  type : PropTypes.string,
  bg : PropTypes.string,
};

export default Navbar;
