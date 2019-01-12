[![Build Status](https://travis-ci.com/Al-un/workbox.svg?branch=master)](https://travis-ci.com/Al-un/workbox)

# Workbox tutorial

Getting started with Workbox https://developers.google.com/web/tools/workbox/guides/get-started

## Tutorial progress

1. [Getting started](https://developers.google.com/web/tools/workbox/guides/get-started)
   - Register service workers
   - Import workbox
   - Caching content with a network first strategy
2. [Precaching files](https://developers.google.com/web/tools/workbox/guides/precache-files/)
   - Install workbox-cli (hence _yarn.lock_/_package.json_) => given up
   - Precache to make it available offline
   - Switching to webpack
3. [Configure workbox](https://developers.google.com/web/tools/workbox/guides/configure-workbox)
   - custom cache name
4. Webpack: Multiple pages
   - website will use a SPA-like structure
   - Using SCSS instead of pure CSS
   - Vocaloid pages are using [markdown-loader](https://github.com/peerigon/markdown-loader)
   - Adding [Bulma](https://bulma.io/documentation/overview/) which does not
     go very well with Markdown
5. PWA with Lighthouse check
   - Add application icons + import in _main.js_
   - Add a manifest with `webpack-manifest-plugin` and add a `<link rel='manifest' href='...' />`
   - Align address color with theme color
   - Correct HTML bad practices

## Branches

- `master` current working branch
- `gh-pages` Github pages
- `freeze/manual` freezing the state where the web content was manual. `master`
  uses webpack
