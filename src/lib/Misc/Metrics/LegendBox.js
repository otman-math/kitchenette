import React, {Component} from 'react';
import Icon from '../../Typography/Icon';
import {getClasses} from '../../Helpers/index';

/**
 *
 */
class LegendBox extends Component {
  _getColorClass(label) {
    label = label.toLowerCase();
    switch (label) {
      case 'negative': return 'color-red';
      case 'positive': return 'color-green';
      case 'neutral':
      default: return 'color-gray';
    }
  }

  render() {
    return (
      <div className={'col-md-2'}>
        <div className={'row'}>
          <div className={'col-md-3 text-center no-padding text-secondary'}>
            <Icon
              classes={this._getColorClass(this.props.label)}
              collection={this.props.icon.type}
              icon={this.props.icon.icon}
              size={this.props.icon.size}
              type='fa'/>
            <h3 className={getClasses('uppercase text-secondary', this._getColorClass(this.props.label))}>{this.props.value}</h3>
          </div>
          <div className={'col-md-9 no-padding'}>
            <h5 className={getClasses('uppercase no-margin text-secondary', this._getColorClass(this.props.label))}>{this.props.label}</h5>
            <p className={'no-margin txt-xs text-muted capitalize'}>{this.props.subLabel}</p>
          </div>
        </div>
      </div>
    );
  }
}

/*LegendBox.prototype = {
	label: PropTypes.string,
	subLabel: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.object
};

LegendBox.defaultProps = {
	label: 'Negative',
	subLabel: 'Mentions',
	value: '3 K',
	icon: {
		icon: 'grin-beam',
		type: 'regular',
		size: 40
	}
};*/

export default LegendBox;
