module.exports = {
  'ABC Online website: landing page: load header' : function (browser) {
    var page = browser.page['abc_online_website']();

    browser.url('http://www.abc.net.au/news/');

    page.expect.element('@body').to.be.visible.before(1000)
    page.expect.element('@header').to.be.visible
  },

  'ABC Online website: landing page: click the "Just In" link' : function (browser) {
    var page = browser.page['abc_online_website']();

    page.click('@just-in-link')

    page.expect.element('@just-in-header').to.be.visible.before(1000)
    browser.assert.urlEquals('http://www.abc.net.au/news/justin/')
  },

  function (browser) { browser.end(); }
};
