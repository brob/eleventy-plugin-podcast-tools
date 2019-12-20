const fs = require("fs");

module.exports = function(filePath) {
    const stats = fs.statSync(filePath);
    return stats.size;  
} 