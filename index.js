const axios = require('axios')
"use strict";
// https://github.com/TiagoDanin/Require-From-Web/blob/master/index.js
// https://github.com/floatdrop/require-from-string/blob/master/index.js

/* const Module = require("module")
const path = require("path") */
// code is BASE64 script based
// file name is string filenaming
module.exports = function requireFromString(code, filename, opts) {


  if (typeof code !== "string") {
    // eslint-disable-next-line unicorn/prefer-type-error
    throw new Error("code must be a string, not " + typeof code);
  }
  // case when is base 64
  if(code.includes("http")){
    const response = await axios({
      method: 'GET',
      code,
      ...opts
    })
    let string = response.data.toString()
    if (code) {
      string += '\n' + code
    }
  
    const _module = new module.constructor()
    _module.filename = url
    _module._compile(string, url)
  }else{

  }
  let string = Buffer.from(code, "base64").toString();

  let m = new module.constructor();
  m.filename = filename;
  m._compile(string, filename);
  //console.log("klaus modales", module, globalThis.KLAUS);
  return { exports: module.exports, KLAUS: globalThis.KLAUS };
};
