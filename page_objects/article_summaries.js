var elements = [];

var object = {};
object['body'] = { selector: '//body', locateStrategy: 'xpath' };
elements.push(object);

for (var i = 1; i <= 25; i++) {
  var base = `//ul[@class="article-index"]/li[position()=${i}]`;

  var object = {};
  object[`title-${i}`] = { selector: `${base}/h3`, locateStrategy: 'xpath' };
  elements.push(object);

  var object = {};
  object[`byline-${i}`] = { selector: `${base}/div[@class="byline"]`, locateStrategy: 'xpath' };
  elements.push(object);

  var object = {};
  object[`dateline-${i}`] = { selector: `${base}/p[@class="published"]`, locateStrategy: 'xpath' };
  elements.push(object);
  
  var object = {};
  object[`text-${i}`] = { selector: `${base}/p[not(@class)]`, locateStrategy: 'xpath' };
  elements.push(object);
}

module.exports = {
  elements: elements
};