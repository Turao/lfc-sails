'use strict';

module.exports = {
  attributes: {
    comment: {
      type: 'string',
      required: true,
    },

    source: {
      type: 'string',
      required: true,
    },

    veracity: {
      type: 'string',
      required: true,
    },

    verifiedByModerator: {
      type: 'boolean',
      required: true,
    },

    // model associations
    // a fact check belongs to a checker
    checker: {
      model: 'user',
    },

    // a fact check belongs to a statement
    statement: {
      model: 'statement',
    },

    // a fact check belongs to a moderator
    moderator: {
      model: 'user',
    },
  },
}