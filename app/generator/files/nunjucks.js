/**
 * Generate files specific to the nunjucks folder
 */

'use strict';

var nunjucksFiles = function nunjucksFiles() {
  if (this.htmlOption === 'nunjucks') {
    this.template('src/static/nunjucks/_layouts/base.nunjucks', 'src/_layouts/base.nunjucks');
    this.template('src/static/nunjucks/_scripts/main.js', 'src/_scripts/main.js');
    this.template('src/static/nunjucks/index.nunjucks', 'src/index.nunjucks');

    if (this.useDashboard) {
      this.template('src/static/nunjucks/__dash__/index.dash.json', 'src/__dash__/index.dash.json');
    }
  }
};

module.exports = nunjucksFiles;