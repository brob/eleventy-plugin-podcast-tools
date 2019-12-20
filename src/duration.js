const mm = require('music-metadata');


module.exports = function(filePath) {
    return mm.parseFile(filePath)
    .then(metadata => {
        let date = new Date(null);
        date.setSeconds(metadata.format.duration);
        var MHSTime = date.toISOString().substr(11, 8);

        return MHSTime
    })
    .catch(err => {
        console.log(err);
    });
} 