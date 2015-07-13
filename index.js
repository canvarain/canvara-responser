/**
 * Copyright(c) 2015, canvara Technologies Pvt. Ltd.
 */
'use strict';

/**
 * Main file for the module
 * @author      ritesh
 * @version     1.0.0
 */

/**
 * Module dependencies
 * @private
 */
var winston = require('winston');

/**
 * Constructor function
 */
function CanvaraResponser(options) {
  this.options = options || {};
}

/**
 * Middleware function
 * This middleware is added after the controllers, this will serialize the data into JSON and respond to client
 *
 * @param   {Object}    req             express request instance
 * @param   {Object}    res             express response instance
 * @param   {Function}  next            next function(middleware) to call
 */
CanvaraResponser.prototype.middleware = function(req, res, next) {
  
};

// module exports
module.exports = CanvaraResponser;