const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Path');
const filePath = `${dirPath}/text.txt`;

fs.writeFileSync(filePath, "This is simple text file");