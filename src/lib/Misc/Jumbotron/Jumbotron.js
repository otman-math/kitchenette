import React, {Component} from "react";
import PropTypes from 'prop-types';

class Jumbotron extends Component {
  _buildClasses() {
    let classes = ['jumbotron'];
    if (this.props.fluid) {
      classes.push('jumbotron-fluid');
    }
    return classes.join(" ");
  }

  _getJumbotron() {
    return (<div>
        <h1 className="display-4">{this.props.title}</h1>
        <p className="lead">{this.props.lead}</p>
        <hr className="my-4"/>
        <p>{this.props.paragraph}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" role="button">{this.props.name}</a>
        </p>
      </div>
    );
  }

  _getFluidJumbotron() {
    return (<div className="container">
      <h1 className="display-4">{this.props.fluidTitle}</h1>
      <p className="lead">{this.props.text}</p>
    </div>);
  }

  render() {
    return (
      <div className={this._buildClasses()}>
        {this.props.jumbotron && this._getJumbotron()}
        {this.props.fluidJumbotron && this._getFluidJumbotron()}
      </div>

    );
  }
}

Jumbotron.defaultProps = {
  title: 'Hello, world!',
  fluidTitle: 'Hello, world!',
  lead: 'This is a simple hero unit',
  paragraph: 'It uses utility classes for typography and spacing to space content',
  name: 'Learn more',
  fluidJumbotron: false,
  text: 'This is a modified jumbotron that occupies the entire horizontal space of its parent.',
  jumbotron: false,
};

Jumbotron.propTypes = {
  paragraph: PropTypes.string,
  lead: PropTypes.string,
  text: PropTypes.string,
};

export default Jumbotron;
