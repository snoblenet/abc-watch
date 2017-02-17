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
    }
  }
};