'use strict';

function setMessage(context, events, done) {
  context.vars.message = {
          lat: 10.7772780,
          long: 106.7044060,
          bearing: Math.random(),
          speed: Math.random()
      };
  return done();
}

module.exports = {
		setMessage: setMessage
};