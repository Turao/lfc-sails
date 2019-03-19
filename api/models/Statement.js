'use strict';

module.exports = {
  attributes: {
    content: {
      type: 'string',
      required: true,
    },

    date: {
      type: 'string',
      required: true,
    },

    // model associations
    // a statement belongs to an politician
    politician: {
      model: 'user',
    },

    // a statement belongs to an event
    event: {
      model: 'event',
    },

    // a statement has many fact checks
    factchecks: {
      collection: 'factcheck',
      via: 'statement',
    },
  },
}