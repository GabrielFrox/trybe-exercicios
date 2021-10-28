import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    
    const { pok } = this.props;
    const { value, measurementUnit } = pok.averageWeight;
    
    return (
    <div className='cell'>
      <section>
        <h4>{pok.name}</h4>
        <p>{pok.type}</p>
        <p>Average weight: {value} {measurementUnit}</p>
      </section>
      <img src={pok.image} alt={pok.name} />
    </div>
    )}
}

Pokemon.propTypes = {
  pok: PropTypes.object.isRequired,
}

export default Pokemon;