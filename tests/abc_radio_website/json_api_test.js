require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = {
  'ABC Radio website: JSON API test' : function (browser) {
    fetch('https://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json', {method: 'get'}).then(function(response) {
      return response.json();
    }).then(function(j) {

      browser.assert.equal(j["entity"], "Program");
      browser.assert.equal(j["arid"], "ppJj0E8g2R");
      browser.assert.equal(j["title"], "Mornings");
      browser.assert.equal(j["mini_synopsis"], "Mornings presents local news and issues, talking with everyday folk about current issues");
      browser.assert.equal(j["short_synopsis"], "Mornings presents local news and issues, talking with everyday folk about current issues");
      browser.assert.equal(j["medium_synopsis"], "Mornings presents local news and issues, talking with everyday folk about current issues. Local stories and issues are at the heart of the Mornings program, bringing you fresh local and regional information - including your opportunity to ask direct questions to the ACT Chief Minster each Friday");
      browser.assert.equal(j["created_utc"], "2014-10-09T05:01:49+0000");
      browser.assert.equal(j["last_updated_utc"], "2016-09-05T06:49:46+0000");
      browser.assert.equal(j["service_airport_code"], null);
    });
  },

  function (browser) { browser.end(); }
};
