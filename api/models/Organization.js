'use strict';

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },

    // model associations
    // an organization has many events
    events: {
      collection: 'event',
      via: 'organization',
    },
  },
}