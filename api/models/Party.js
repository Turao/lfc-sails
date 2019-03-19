'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },

    abbreviation: {
      type: 'string',
      required: true,
    },

    // model associations
    // a party has many politicians
    politicians: {
      collection: 'user',
      via: 'party',
    },
  },
}