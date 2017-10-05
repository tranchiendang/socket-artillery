'use strict';

function setParameter(context, events, done) {
  context.vars.message = {
          lat: 10.7772780,
          long: 106.7044060,
          bearing: Math.random(),
          speed: Math.random()
      };
  context.vars.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc3MDcsInBob25lIjoiMDk5NzkwNDU1MSIsIm5hbWUiOiJDaHVuZyDEkOG7qWMgQW4iLCJhdmF0YXIiOiIwMDI0OTAuanBnIiwiZW1wbG95ZWVfaWQiOiIwMDI0OTAiLCJ0YXhpX25vIjoiNjIxMiIsImlhdCI6MTUwNzE2OTI3MCwiZXhwIjoxNTA3MjU1NjcwfQ.dVYk5aJXUulC3XdnFBdp78MM5w52mBMB1QPRzeBYV80";
  return done();
}

module.exports = {
	setParameter: setParameter
};