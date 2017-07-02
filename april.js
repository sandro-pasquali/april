'use strict';

let april = require('wikijs').default().page('april');

module.exports = {
	data : () => april.then(page => page.content()),
	images : () => april.then(page => page.images())
};