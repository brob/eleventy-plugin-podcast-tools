const filesize = require("./src/filesize");
const getDuration = require('./src/duration');



module.exports = {
    
    configFunction: function(eleventyConfig, options = {}) {
        
        eleventyConfig.addNunjucksAsyncFilter("duration", async function(filePath, callback) {
            let duration = await getDuration(filePath);
            callback(null, duration);
        });
        eleventyConfig.addLiquidFilter("duration", async function(filePath) {
            let duration = await getDuration(filePath);
            return duration;
        });
        
        
        eleventyConfig.addFilter("filesize", filesize);

    }
};
