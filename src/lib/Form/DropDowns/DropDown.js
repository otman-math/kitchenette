import React, {Component} from "react";
import PropTypes from "prop-types";
import shortid from 'shortid';
class DropDown extends Component {

  _buildDrop(){
    let classes = ['btn-group'];
    if(this.props.up){
      classes.push('dropup');
    }
    if(this.props.right){
      classes.push('dropright');
    }
    if(this.props.left){
      classes.push('dropleft');
    }
    return classes.join(" ");

  }
  _getDrop(){
    return  this.props.values.map(val => (
      <a key={shortid.generate()} className="dropdown-item" href={val.href} >{val.text}</a>
      )
    );
  }
  _getDropDivider(){
    return  this.props.vals.map(val => (
      <a key={shortid.generate()} className="dropdown-item" href={val.href} >{val.text}</a>
      )
    );
  }
  render() {
    return (
        <div className={this._buildDrop()}>
           <button type="button"
                  className={`btn btn-${this.props.type} btn-${this.props.size} dropdown-toggle dropdown-toggle-${this.props.split}`}
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.buttonName  || this.props.children}
           </button>
             <div className="dropdown-menu">
                {(this.props.values && this._getDrop())}
             <div className="dropdown-divider"></div>
                {(this.props.vals && this._getDropDivider())}
             </div>
        </div>
    );
  }
}
DropDown.defaultProps = {
   size : 'lg',
   type :'success'
};
DropDown.propTypes = {
    type : PropTypes.string,
    size : PropTypes.string,
    buttonName : PropTypes.string,
};

export default DropDown;
