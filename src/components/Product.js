// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

 export default class Product extends React.Component{
  render(){
    return(
      <div className="dunder">
        <h3>{this.props.name}</h3>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weigh}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.boolean,
  color: PropTypes.string
}
