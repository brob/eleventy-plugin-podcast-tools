const filesize = require("./src/filesize");
const getDuration = require('./src/duration');



module.exports = {
    
    configFunction: function(eleventyConfig, options = {}) {
        
        eleventyConfig.addNunjucksAsyncFilter("duration", async function(filePath, callback) {
            let duration = await getDuration(filePath);
            setTimeout(function() {           
                callback(null, duration);
            }, 100);
        });
        
        
        eleventyConfig.addFilter("filesize", filesize);

    }
};