module.exports = {
  'ABC Radio website: load the "On Air" guide ' : function (browser) {
    var page = browser.page['abc_radio_website']();

    browser.url('http://www.abc.net.au/radionational/')

    page.expect.element('@body').to.be.visible.before(1000)
  },
  
  'ABC Radio website: scroll the "On Air" guide to the end' : function (browser) {
    var page = browser.page['abc_radio_website']();
    page.expect.element('@on-air-guide-last-program-link').to.not.be.visible

    for (var i = 1; i <= 3; i++) {
      page.click('@on-air-guide-right-arrow')
      browser.pause(1000)
    }

    page.expect.element('@on-air-guide-last-program-link').to.be.visible
  },
  
  'ABC Radio website: hover of the last program in the "On Air" guide' : function (browser) {
    var page = browser.page['abc_radio_website']();
    page.expect.element('@on-air-guide-last-program-overlay').to.not.be.present

    page.moveToElement('@on-air-guide-last-program-link', 20, 20)

    page.expect.element('@on-air-guide-last-program-overlay').to.be.visible.before(1000)
  },

  function (browser) { browser.end(); }
};
