module.exports = function (options) {
    return function (req, res, next) {
        req.requestTime = Date.now()
        console.log("time", Date.now())
        next()
    }
}