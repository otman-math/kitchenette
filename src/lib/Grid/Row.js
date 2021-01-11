import React, {Component} from 'react';
import shortid from 'shortid';

class Row extends Component {

	_getColumns () {
		return this.props.cols.map(function(col){
			return (<div className={"col"} key={shortid.generate()}>{col}</div>);
		});
	}

	render() {
		return (
			<div className={"row"}>
				{this._getColumns()}
			</div>
		);
	}

}

export default Row;