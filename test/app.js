/**
 * Copyright(c) 2015, canvara Technologies Pvt. Ltd.
 */

'use strict';

/**
 * This file exposes createServer method.
 *
 * @author      ritesh
 * @version     1.0.0
 */

/**
 * Module dependencies
 * @private
 */
var Responser = require('..');
var express = require('express');

/**
 * Create an http server with the provided data and options.
 * @param   {Object}    data              data object to add to the req instance, this is returned by the responser middleware to client
 * @param   {Object}    options           options to configure the http server
 */
exports.createServer = function(data, options) {
  var responser = new Responser(options);
  var app = express();
  app.get('/', function(req, res, next) {
    req.data = data;
    next();
  });
  app.use(responser.middleware());
  return app;
};