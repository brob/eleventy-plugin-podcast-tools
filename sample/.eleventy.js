const podcastTools = require('../.eleventy.js');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(podcastTools);
    


    return {
        markdownTemplateEngine: "njk"
    }
}