/**
 * Copyright(c) 2015, canvara Technologies Pvt. Ltd.
 */

'use strict';

/**
 * Test script for module
 *
 * @author      ritesh
 * @version     1.0.0
 */
var request = require('supertest'),
  httpStatus = require('http-status'),
  app = require('./app');

describe('<Module test>', function() {
  it('Should end the response, if there is no next and no data', function(done) {
    var server = app.createServer();
    request(server)
      .get('/')
      .expect(httpStatus.NOT_FOUND, done);
  });

  it('Should set the status code properly', function(done) {
    var server = app.createServer({ statusCode: httpStatus.CREATED, content: { name: 'dummy' } });
    request(server)
      .get('/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(httpStatus.CREATED, done);
  });

  it('Should set the content type header properly', function(done) {
    var server = app.createServer({ statusCode: httpStatus.CREATED, content: { name: 'dummy' } });
    request(server)
      .get('/')
      .expect('Content-Type', 'application/json; charset=utf-8', done);
  });

  it('Should set the status code properly if there is no content', function(done) {
    var server = app.createServer({ statusCode: httpStatus.CREATED });
    request(server)
      .get('/')
      .expect(httpStatus.CREATED, done);
  });

  it('Should set the NO_CONTENT status code if there is no content and no statusCode', function(done) {
    var server = app.createServer({});
    request(server)
      .get('/')
      .expect(httpStatus.NO_CONTENT, done);
  });

  it('Should set the default status code', function(done) {
    var server = app.createServer({ content: {name: 'dummy'} }, { defaultStatusCode: httpStatus.NOT_FOUND });
    request(server)
      .get('/')
      .expect(httpStatus.NOT_FOUND, done);
  });

  it('Should return 200 by default', function(done) {
    var server = app.createServer({ content: {name: 'dummy'} });
    request(server)
      .get('/')
      .expect(httpStatus.OK, done);
  });
});
