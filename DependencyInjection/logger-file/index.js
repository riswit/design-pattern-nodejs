const { appendFile } = require('fs');
const { join } = require('path');
 
const logText = join(__dirname, 'log.txt');
 
const write = (log = null) => {
  if (log) {
    appendFile(logText, `${new Date()} > ${log}\n`, error => {
      if (error) {
        return console.log("There was an error writing to the log file!");
      }
    });
  }
}
 
module.exports = {
  write
}