'use strict';

/*
 * options contains:
 *   - message : string
 *   - level : string
 *   - meta : object
 */
module.exports = (base, options) => {
  base.severity = options.level.toUpperCase();
  if ('' !== options.message) {
    Object.assign(options.meta, { msg: options.message });
  }
  const output = Object.assign({}, base, options.meta);
  return `@cee: ${JSON.stringify(output)}`
};
