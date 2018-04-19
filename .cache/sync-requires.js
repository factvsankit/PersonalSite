// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/ankit/projects/learn/gatsby/psGatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ankit/projects/learn/gatsby/psGatsby/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/ankit/projects/learn/gatsby/psGatsby/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/layout-index.json"),
  "404.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/404.json"),
  "layout-index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/layout-index.json"),
  "index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/index.json"),
  "layout-index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/ankit/projects/learn/gatsby/psGatsby/.cache/json/404-html.json")
}