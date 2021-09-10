'use strict';

var generator = require('./lib/generator');
hexo.extend.generator.register('restful_api', function (site) {
  return generator(hexo, site);
});