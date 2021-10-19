"use strict";
exports.__esModule = true;
exports.errorHandler = exports.notFound = void 0;
var notFound = function (req, res, next) {
    var error = new Error("Not found - " + req.originalUrl);
    res.status(404);
    next(error);
};
exports.notFound = notFound;
//middleware example - detects requests for the routes
// to overtake error response  - it needs to have err as 1st argument
// it means that we assign res.statusCode to error unless its 200 then we assign 500 (if res.statusCode === 200 then error === 500)
var errorHandler = function (err, req, res, next) {
    var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
exports.errorHandler = errorHandler;
