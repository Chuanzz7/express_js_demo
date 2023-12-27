const moment = require("moment");
const logger = (req, res, next) => {
    console.log(`Custom Logger Example - ${moment().format()}`)
    next();
};
module.exports = logger;