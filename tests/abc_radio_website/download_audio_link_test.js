module.exports = {
  'ABC Radio website: episode page : click the Download Audio button' : function (browser) {
    if (browser.options.desiredCapabilities.browserName != 'chrome') { 
      var page = browser.page['abc_radio_website']();
      browser.url('http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406');

      page.click('@download-audio-button');

      browser.pause(1000);
      browser.assert.urlEquals('http://mpegmedia.abc.net.au/rn/podcast/2017/02/bia_20170208_2005.mp3');
     }
  },

  function (browser) { browser.end(); }
};
