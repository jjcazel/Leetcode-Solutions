
function Logger() {
    this.logTimeStamps = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    if (this.logTimeStamps.hasOwnProperty(message) && timestamp < this.logTimeStamps[message] + 10) {
        return false;
    }
    
    this.logTimeStamps[message] = timestamp;
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */