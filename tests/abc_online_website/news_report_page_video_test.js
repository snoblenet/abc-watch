module.exports = {
  'ABC Online website: news report page: load the video' : function (browser) {
    var page = browser.page['abc_online_website']();

    browser.url('http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908')

    page.expect.element('@body').to.be.visible.before(1000)
    // As per the challenge, check the video loads (no mention of checking that it plays)
    page.expect.element('@video-player').to.be.visible
  },

  function (browser) { browser.end(); }
};
