module.exports = {
  'ABC Radio website: episode page : click the Listen Now button' : function (browser) {
    if (browser.options.desiredCapabilities.browserName != 'firefox') { 
      var page = browser.page['abc_radio_website']();
      browser.url('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');

      page.click('@listen-now-audio-button');
      browser.window_handles(function(result) {
        var popUp = result.value[1];
        browser.switchWindow(popUp);
      });

      page.expect.element('@listen-now-audio-player').to.be.present.before(1000);
      browser.assert.urlEquals('https://radio.abc.net.au/programitem/pg1aGbWlx6?play=true');
    }
  },

  function (browser) { browser.end(); }
};
