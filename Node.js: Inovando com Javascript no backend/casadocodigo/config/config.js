var express = require('express')();
express.set('view engine', 'ejs');

module.exports = function (){
  return express;
};
