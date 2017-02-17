module.exports = {
  'ABC Online website: "Just In" page: load the article summaries' : function (browser) {
    var page = browser.page['abc_online_website']();
    var summaries = browser.page['article_summaries']();

    browser.url('http://www.abc.net.au/news/justin/')

    page.expect.element('@body').to.be.present.before(1000)
    for (var i = 1; i <= 25; i++) {
      summaries.expect.element(`@title-${i}`).to.be.present
      // Uncomment to make the test fail, as some article summaries do not have bylines
      // summaries.expect.element(`@byline-${i}`).to.be.present
      summaries.expect.element(`@dateline-${i}`).to.be.present
      summaries.expect.element(`@text-${i}`).to.be.present
    }
  },

  function (browser) { browser.end(); }
};

