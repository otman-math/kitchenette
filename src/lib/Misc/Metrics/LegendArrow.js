import React, {Component} from 'react';
import Icon from "../../Typography/Icon";
import shortid from "shortid";
import './css/style.css';

/**
 *
 */
class LegendArrow extends Component {

  /**
   *
   * @returns {*}
   * @private
   */
  _getLegends() {
    return this.props.data.map(function (item) {
      return (
        <div className={"legend-arrows col-2 bg-primary padding-md padding-top-bottom-lg"} key={shortid.generate()}>
          <div className={"row"}>
            <div className={"col-4 text-center no-padding text-white"}>
              <Icon
                collection={item.icon.type}
                icon={item.icon.icon}
                size={item.icon.size}
                type='fa'/>
            </div>
            <div className={"col-8 no-padding"}>
              <h5 className={"uppercase text-white no-margin"}>{item.value}</h5>
              <p className={"no-margin txt-xs text-white capitalize"}>{item.subLabel}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  /**
   *
   * @returns {*}
   */
  render() {
    return (
      <div className={"row justify-content-center"}>
        {this._getLegends()}
      </div>
    );
  }
}

export default LegendArrow;