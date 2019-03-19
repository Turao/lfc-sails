'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },

    date: {
      type: 'string',
      columnType: 'date',
      required: true,
    },

    // model associations
    // an event belongs to an organization
    organization: {
      model: 'organization',
    },

    // an event may have many moderators
    moderators: {
      collection: 'user',
      via: 'events',
    },

    // an event has many statements
    statements: {
      collection: 'statement',
      via: 'event',
    },
  },
};