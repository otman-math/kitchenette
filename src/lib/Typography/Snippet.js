import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

class Snippet extends Component {

	componentDidMount() {
		hljs.initHighlightingOnLoad();
	}

	render() {
		return (
			<pre>
				<code className={this.props.lang ? this.props.lang : "html"}>{this.props.code}</code>
			</pre>
		);
	}
}

export default Snippet;