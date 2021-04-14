"use strict";
// https://github.com/TiagoDanin/Require-From-Web/blob/master/index.js
// https://github.com/floatdrop/require-from-string/blob/master/index.js

/* const Module = require("module")
const path = require("path") */
// code is BASE64 script based
// file name is string filenaming
module.exports = function requireFromString(code, filename, opts) {
  /*   if (typeof filename === "object") {
    opts = filename
    filename = undefined
  }

  opts = opts || {}
  filename = filename || ""

  opts.appendPaths = opts.appendPaths || []
  opts.prependPaths = opts.prependPaths || [] */

  if (typeof code !== "string") {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("code must be a string, not " + typeof code);
  }
  let string = Buffer.from(code, "base64").toString();

  let m = new module.constructor();
  m.filename = filename;
  m._compile(string, filename);

  return module.exports;
};
