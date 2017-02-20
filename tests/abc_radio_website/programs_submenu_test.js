module.exports = {
  'ABC Radio website: view the "Programs" menu tab' : function (browser) {
    var page = browser.page['abc_radio_website']();

    browser.url('http://www.abc.net.au/radionational/')

    page.expect.element('@body').to.be.visible.before(1000)
  },

  'ABC Radio website: hover over the "Programs" menu tab' : function (browser) {
    if (browser.options.desiredCapabilities.browserName != 'firefox') { 
      var page = browser.page['abc_radio_website']();
      page.expect.element('@programs-drop-down-menu').to.not.be.visible

      page.moveToElement('@programs-menu-tab', 20, 20)

      page.expect.element('@programs-drop-down-menu').to.be.visible.before(1000)
    }
  },

  'ABC Radio website: click the Big Ideas link' : function (browser) {
    if (browser.options.desiredCapabilities.browserName != 'firefox') { 
      var page = browser.page['abc_radio_website']();

      page.click('@big-ideas-link')

      page.expect.element('@big-ideas-page-header').to.be.visible.before(1000)
      browser.assert.urlEquals('http://www.abc.net.au/radionational/programs/bigideas/')
    }
  },

  function (browser) { browser.end(); }
};
