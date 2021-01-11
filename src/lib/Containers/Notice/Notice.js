import React, {Component} from "react";
import PropTypes from 'prop-types';

class Notice extends Component {
	render() {
		return (
			<div className={`alert alert-${this.props.type}`}  role="alert">
  				<h4 className="alert-heading">{this.props.title}</h4>
  				<p>{this.props.content}</p>
  				<hr/>
  				<p className="mb-0">{this.props.secondContent}</p>
			</div>				
		);
	}
}

Notice.defaultProps = {
	type: 'success',
	content: '',
	secondContent: '',
};

Notice.propTypes = {
	content: PropTypes.string,
	type: PropTypes.string,
	secondContent: PropTypes.string,
};

export default Notice;