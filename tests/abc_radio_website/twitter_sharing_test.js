module.exports = {
  'ABC Radio website: episode page : click the Twitter share button' : function (browser) {
    var page = browser.page['abc_radio_website']();
    browser.url('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');

    page.click('@twitter-share-button')
    browser.pause(1000)
    browser.window_handles(function(result) {
      var popUp = result.value[1];
      browser.switchWindow(popUp);
    });

    browser.assert.urlContains('https://twitter.com');
    browser.assert.urlContains('a-fortunate-universe');
  },

  function (browser) { browser.end(); }
};
