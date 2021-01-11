import React, {Component} from 'react';
import shortid from 'shortid';

/**
 * @author: Faiçal BAKI <faical.baki@gmail.com>
 * @desc: this is the sample table implementation
 * @todo: fix some bugs and write more tests
 * @why: Is it possible to add this one!!!
 */
class Table extends Component {

	/**
	 *
	 * @param props
	 */
	constructor (props) {
		super(props);
		this.state = {
			classes: ["table"]
		};
		this._getColumn = this._getColumn.bind(this);
	}
	/**
	 *
	 * @param col
	 * @returns {*}
	 * @private
	 */
	_getColumn(col) {
		return col.values.map(function(td){
			return (<td key={shortid.generate()}>{td}</td>);
		});
	}
	/**
	 *
	 * @returns {*}
	 * @private
	 */
	_getBody () {
		var self = this;
		return this.props.data.map(function(col){
			return (<tr key={shortid.generate()}>{self._getColumn(col)}</tr>);
		});
	}

	/**
	 *
	 * @returns {string[]}
	 * @private
	 */
	_getClasses () {
		let classes = this.state.classes;

		this.props.stripped && classes.push("table-stripped");
		this.props.hover && classes.push("table-hover");

		return classes.join(" ");
	}
	/**
	 *
	 * @returns {*}
	 */
	render() {
		return (
			<div className="table-responsive">
				<table className={this._getClasses()}>
					<caption>List of users</caption>
					<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Handle</th>
					</tr>
					</thead>
					<tbody>{this._getBody()}</tbody>
				</table>
			</div>
		);
	}
}

export default Table;