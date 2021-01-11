import React, {Component} from 'react';
import Icon from '../../Typography/Icon';
import './assets/css/style.css';

class IconSquare extends Component {
	render() {
		return (
			<div className={"iconSquare hover text-center"}>
				<Icon icon={"map"} collection={"solid"} size={46} type='fa'/>
				<h4 className={"caption capitalize"}>Marketing</h4>
			</div>
		);
	}
}

export default IconSquare;