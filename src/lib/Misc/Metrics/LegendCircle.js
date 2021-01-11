import React, {Component} from 'react';

class LegendCircle extends Component {
	render() {
		return (
			<div className={"col-md-3 no-padding text-primary text-center"}>
				<h1 className={"no-margin-bottom"}>{this.props.percent}%</h1>
				<hr className={"border-primary w-50"}/>
				<p className={"capitalize no-margin-bottom"}>{this.props.value}</p>
				<p className={"capitalize no-margin-bottom"}>{this.props.label}</p>
			</div>
		);
	}
}

export default LegendCircle;