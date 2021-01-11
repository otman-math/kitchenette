import React, {Component} from 'react';

class Badge extends Component {
	_getClasses() {

		let classes = ["badge", 'padding-sm'];
		switch (this.props.type) {
			case "primary":
				classes.push("badge-primary");
				break;
			case "success":
				classes.push("badge-success");
				break;
			case "danger":
				classes.push("badge-danger");
				break;
			case "warning":
				classes.push("badge-warning");
				break;
			case "info":
				classes.push("badge-info");
				break;
			case "light":
				classes.push("badge-light");
				break;
			case "dark":
				classes.push("badge-dark");
				break;
			default:
				classes.push("badge-secondary");
				break;

		}

		if(this.props.pill){
			classes.push("badge-pill");
		}

		return classes.join(" ");
	}

	render() {
		return (
			<span className={this._getClasses()}>{this.props.text}</span>
		);
	}
}

export default Badge;