# 11ty Plugin Podcast Tools

This is a (potentially) quick and dirty plugin that will give you filters for using 11ty to host your podcast.

## Installation

`npm install eleventy-plugin-podcast-tools`

Add the plugin to your 11ty configuration file (probably `.eleventy.js`).

```js
const podcastTools = require('eleventy-plugin-podcast-tools');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(podcastTools);

    ...
}
```

Use the filters below to get the information you need from your files.

## Filter: Duration

The Duration filter currently only works in Nunjucks (it's a Nunjucks async filter).

### Syntax

In a Nunjucks template, you can use the following filter on a variable or expression that contains a path to an audio file in your project.

```html
{{ path_to_file | duration }}
```

This will return the duration of your audio file in the following (iTunes approved?) syntax: `HH:MM:SS` i.e. `01:05:22`

## Filter: File Size

This filter (universal) will return the file size of your audio file in (iTunes approved?) bytes.

```html
{{ path_to_file | filesize }}
```

## Feedback

This was quick and dirty based on this twitter thread. If you have feedback, requests, etc. I'm all ears. If you have ideas for improving, I'll 100% accept pull requests of help.
