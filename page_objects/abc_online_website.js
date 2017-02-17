module.exports = {
  elements: {
    body: { 
      selector: '//body',
      locateStrategy: 'xpath'
    },
    header: {
      selector: '//div[@id="header"]',
      locateStrategy: 'xpath'
    },
    'just-in-link': {
      selector: '//li[@id="n-justin"]/a',
      locateStrategy: 'xpath'
    },
    'just-in-header': {
      selector: '//h1[text()="Just In"]',
      locateStrategy: 'xpath'
    },
    'image-gallery': {
      selector: '//div[@class="slideshowpro-gallery"]',
      locateStrategy: 'xpath'
    },
    'video-player': {
      selector: '//div[@id="jwplayer-video-0"]',
      locateStrategy: 'xpath'
    }
  }
};