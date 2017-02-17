module.exports = {
  'ABC Online website: news report page: load the image gallery' : function (browser) {
    var page = browser.page['abc_online_website']();

    browser.url('http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256')

    page.expect.element('@body').to.be.present.before(1000)
    page.expect.element('@image-gallery').to.be.present.before(1000)
    page.expect.element('@image-gallery').to.be.visible
  },

  function (browser) { browser.end(); }
};
