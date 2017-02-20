module.exports = {
  elements: {
    body: { 
      selector: '//body',
      locateStrategy: 'xpath'
    },
    'programs-drop-down-menu': {
      selector: '//ul[@id="rn-programindex"]',
      locateStrategy: 'xpath'
    },
    'programs-menu-tab': {
      selector: '//div[@id="rn-navigation"]/ul/li/a[text()="Programs"]/parent::li',
      locateStrategy: 'xpath'
    },
    'big-ideas-link': {
      selector: '//ul[@id="rn-programindex"]/li/a[text()="Big Ideas"]',
      locateStrategy: 'xpath'
    },
    'big-ideas-page-header': {
      selector: '//h2[@class="rn-program-banner"]/a[text()="Big Ideas"]',
      locateStrategy: 'xpath'
    },
    'on-air-guide-last-program-link': {
      selector: '//ul[@class="at-a-glance"]/li[@epoch][last()]',
      locateStrategy: 'xpath'
    },
    'on-air-guide-last-program-overlay': {
      selector: '//ul[@class="at-a-glance"]/li[@epoch][last()]/div[@id="overlay"]',
      locateStrategy: 'xpath'
    },
    'on-air-guide-right-arrow': {
      selector: '//div[@class="on-air-wrapper"]/div[@id="right-arrow"]',
      locateStrategy: 'xpath'
    },
    'search-box': {
      selector: '//input[@id="search-simple-input-query"]',
      locateStrategy: 'xpath'
    },
    'search-button': {
      selector: '//input[@id="search-simple-input-submit"]',
      locateStrategy: 'xpath'
    },
    'search-results-summary': {
      selector: '//div[@class="ct-search-header"]',
      locateStrategy: 'xpath'
    },
    'twitter-share-button': {
      selector: '//iframe[@id="twitter-widget-0"]',
      locateStrategy: 'xpath'
    },
    'twitter-share-pop-up-heading': {
      selector: '//text()[contains(., "Share a link with your followers")]',
      locateStrategy: 'xpath'
    },
    'facebook-share-button': {
      selector: '//div[@class="fb-share-button fb_iframe_widget"]',
      locateStrategy: 'xpath'
    },
    'download-audio-button': {
      selector: '//a[@class="ico ico-download"]',
      locateStrategy: 'xpath'
    },
    'listen-now-audio-button': {
      selector: '//a[@class="ico ico-audio modrewrite"]',
      locateStrategy: 'xpath'
    },
    'listen-now-audio-player': {
      selector: '//div[@class="rp__playingPanel__playing"]',
      locateStrategy: 'xpath'
    },
    'audio-file': {
      selector: '//source[@type="audio/mpeg"]',
      locateStrategy: 'xpath'
    }
  }
};