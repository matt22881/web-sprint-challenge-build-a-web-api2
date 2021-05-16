function errorHandler(error, req, res, next) {
    console.log('error: ', error.message);
    const code = error.status || error.statusCode || 500;
    res.status(code).json(error);
}

module.exports = errorHandler