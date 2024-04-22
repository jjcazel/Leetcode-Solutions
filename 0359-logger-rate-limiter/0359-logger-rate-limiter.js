
function Logger() {
    this.timestampLog = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
//O(1) time and O(n) space 
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.timestampLog.hasOwnProperty(message) && timestamp < this.timestampLog[message] + 10) {
        return false;
    }

    this.timestampLog[message] = timestamp;
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */