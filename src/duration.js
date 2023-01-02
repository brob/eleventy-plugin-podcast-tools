const mm = require('music-metadata');


module.exports = async function(filePath) {
    const file = await mm.parseFile(filePath);
    let date = new Date(null);
        date.setSeconds(file.format.duration);
    var MHSTime = date.toISOString().substr(11, 8);
    return MHSTime
} 