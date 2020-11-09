import React from 'react';
// import Figure from './Figure';

const serializers = {
  // types: {
  //   authorReference: ({node}) => <span>{node.author.name}</span>,
  //   mainImage: Figure
  // }
  types: {
    mainImage: (props) => (
      <img data-testing={process.env.production} alt={props.node.alt} />
    ),
  },
};

export default serializers;
