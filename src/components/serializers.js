import React from 'react';
// import Figure from './Figure';

const serializers = {
  // types: {
  //   authorReference: ({node}) => <span>{node.author.name}</span>,
  //   mainImage: Figure
  // }
  types: {
    mainImage: (props) => (
      <img src={imageUrlFor(props.node.asset)} alt={props.node.alt} />
    ),
  },
};

export default serializers;
