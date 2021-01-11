import React, {Component} from "react";
import PropTypes from 'prop-types';

class Dismiss extends Component {

	_buildClasses () {
    let classes = ['alert'];
    let type    = `alert-${this.props.type}`;
    classes.push(type);

    if(this.props.dismissed) {
      classes.push('alert-dismissible');
    }
    if(this.props.fade) {
      classes.push('fade');
    }
    if(this.props.show) {
      classes.push('show');
    }
    return classes.join(" ");
  }
  _close(){
    return(<button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      );
  }

	render() {
		return (
			<div className={this._buildClasses()} role="alert">
  				<strong>{this.props.strong}</strong> {this.props.content || this.props.children }
  				{(this.props.close && this._close())}
			</div>
		);
	}
}

Dismiss.defaultProps = {
	type: 'success',
	content: '',
	alert: '',
};

Dismiss.propTypes = {
	content: PropTypes.string,
	type: PropTypes.string,
	alert: PropTypes.string,
};

export default Dismiss;
