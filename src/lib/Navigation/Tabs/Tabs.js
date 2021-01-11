import React, {Component} from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import {getClasses} from '../../Helpers/index';

import './assets/css/index.css';

/**
 * @author assalielmehdi
 */
export default class Tabs extends Component {
  _renderTab(tab, index) {
    return (
      <li key={shortId.generate()} className='nav-item'>
        <a className='nav-link' data-toggle='tab' href={`#id-${index + 1}`}
           role='tab' aria-controls='home' aria-selected='false'>
          {tab}
        </a>
      </li>
    );
  }

  _renderTabs(tabs) {
    return tabs.map(this._renderTab);
  }

  _extractTabs(components) {
    return components.map(c => c.tab);
  }

  _extractContents(components) {
    return components.map(c => c.content);
  }

  _renderContent(content, index) {
    return (
      <div key={shortId.generate()} className='tab-pane fade' id={`id-${index + 1}`} role="tabpanel">
        {content}
      </div>
    );
  }

  _renderContents(contents) {
    return contents.map(this._renderContent);
  }

  render() {
    return (
      <div className={getClasses(this.props.classes)}>
        <ul className='nav nav-tabs' role='tablist'>
          {this._renderTabs(this._extractTabs(this.props.components))}
        </ul>
        <div className='tab-content'>
          {this._renderContents(this._extractContents(this.props.components))}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  components: PropTypes.arrayOf(PropTypes.object)
};

Tabs.defaultProps = {
  components: []
};