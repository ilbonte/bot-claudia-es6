'use strict';

var botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (request, originalApiRequest) {
  var prettyResponse = JSON.stringify(request, null, 1);
  return prettyResponse;
});
