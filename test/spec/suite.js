'use strict';

let april = require('../../april.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return april.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return april.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


