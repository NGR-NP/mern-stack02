const errorHandler = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "error"
    const stack = err.stack
    res.status(status).json({
        status,
        errMsg: message,
        stack
    })
}
module.exports = errorHandler;