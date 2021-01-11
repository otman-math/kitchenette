import React, {Component, Fragment} from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import {getClasses} from '../../Helpers/index';
import './assets/index.css';
import Icon from "../../Typography/Icon";

/**
 * @author El Mehdi ASSALI
 */
export default class Facet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 1,
      id: shortId.generate()
    };
    this._changeIcon = this._changeIcon.bind(this);
  }

  _changeIcon() {
    const icon = this.state.icon ^ 1;
    this.setState({
      icon
    });
  }

  _getIcon() {
    return this.props.collapsible &&
      (<Icon type='md' classes='facet-icon' icon={`${this.state.icon ? 'add' : 'remove'}_circle_outline`} size={18}/>);
  }

  _getCollapse() {
    return this.props.collapsible ? 'collapse' : '';
  }

  _renderTitle() {
    return this.props.title && (
      (this.props.collapsible && (
        <div id='facet-title' className={getClasses('col-9 no-margin', this.props.classes)}>
          {this.props.title.toUpperCase()}
        </div>
      )) || (
        <div id='facet-title' className={getClasses('col-lg-4 col-md-12 no-margin', this.props.classes)}>
          {this.props.title.toUpperCase()}
        </div>
      )
    );
  }

  _renderHeaderRight() {
    if (this.props.collapsible) {
      return <div id='facet-right'  className={getClasses('col-3', 'text-right', 'no-margin')}>{this._getIcon()}</div>;
    } else if (this.props.bodyTop) {
      if (this.props.title) {
        return (
          <div id='facet-right'  className={getClasses('col-lg-8', 'col-md-12', 'text-right', 'no-margin', 'facet-right')}>
            {this.props.body}
          </div>
        );
      } else {
        return (
          <div className={getClasses('col-12', 'no-padding-left')}>
            {this.props.body}
          </div>
        );
      }
    }
  }

  _renderBody() {
    return !this.props.bodyTop && this.props.body;
  }

  render() {
    const Tag = this.props.collapsible ? 'a' : 'li';
    return (
      <div id='facet-container'>
        <Tag id='facet-header' className={getClasses('hover list-group-item list-group-item-action padding-sm')}
             role='button'
             data-toggle={this._getCollapse()}
             href={`#${this.state.id}`}
             onClick={this._changeIcon}>
          <div className='row max-width no-margin'>
            {this._renderTitle()}
            {this._renderHeaderRight()}
          </div>
        </Tag>
        {!this.props.bodyTop && this.props.body && (
          <div id={this.state.id} className={getClasses('facet-body', this._getCollapse())}
               data-toggle={this._getCollapse()}>
            {this.props.body}
          </div>
        )}
      </div>
    );
  }
}

Facet.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  title: PropTypes.string,
  body: PropTypes.any,
  collapsible: PropTypes.bool,
  bodyTop: PropTypes.bool
};

Facet.defaultProps = {
  classes: []
};