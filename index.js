'use strict';

const os = require('os');
const winston = require('winston');
const defaults = require('./options').defaults;
const ceeFormatter = require('./cee-formatter');

const buildBase = (config) => {
  let base = {severity: ''};
  if (config.showDate) {
    base.time = new Date().getTime()
  }
  if (config.name) {
    base.name = config.name
  }
  if (config.showHost) {
    base.host = os.hostname();
  }
  if (config.showPID) {
    base.pid = process.pid
  }
  return base;
};


module.exports.setupLogger = (options) => {
  const config = Object.assign(defaults, options);
  const base = buildBase(config);
  return new winston.Logger ({
    levels: { emerg: 0, alert: 1, crit: 2, error: 3, warning: 4, notice: 5, info: 6, debug: 7 },
    transports: [
      new (winston.transports.Console)({
        formatter: ceeFormatter.bind(null, base)
      })
    ]
  });
};
