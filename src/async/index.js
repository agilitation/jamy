
function eachParallelObj(obj, fn, done) {
    eachParallelArr(Object.keys(obj), function (key, cb) {
        fn(key, obj[key], cb);
    }, done);
}

function eachSeriesObj(obj, fn, done) {
    eachSeriesArr(Object.keys(obj), function (key, cb) {
        fn(key, obj[key], cb);
    }, done);
}

function eachParallelArr(arr, fn, done) {
    var i = 0, completed = 0, l = arr.length, cb = function () {
        completed++;
        if (completed === l) {
            callIfFunction(done)
        }
    };
    for (; i < l; i++) {
        fn(arr[i], cb);
    }
}

function eachParallel(subject, fn, done) {
    if (Array.isArray(subject)) {
        return eachParallelArr(subject, fn, done);
    }
    eachParallelObj(subject, fn, done);
}

function parallel(functions, done) {
    var additionalArgs = Array.prototype.slice.call(arguments, 2);
    eachParallelArr(functions, function (fn, cb, prev) {
        var args = [cb, prev];
        if (additionalArgs.length){
            args = additionalArgs.concat(args);
        }
        fn.apply(fn, args);
    }, done);
}

function eachSeries(subject, fn, done) {
    if (Array.isArray(subject)) {
        return eachSeriesArr(subject, fn, done);
    }
    eachSeriesObj(subject, fn, done);
}

function eachSeriesArr(arr, fn, done) {
    var i = 0, prev, cb = function () {
        i++;
        prev = Array.prototype.slice.call(arguments);
        exec();
    };

    function exec() {
        if (i < arr.length) {
            fn(arr[i], cb, prev);
        } else {
            callIfFunction(done);
        }
    }

    exec();
}

/**
 * Additional parameters will be passed as parameters of the callback function
 * @param functions
 * @param done
 */
function series(functions, done) {
    var additionalArgs = Array.prototype.slice.call(arguments, 2);
    eachSeriesArr(functions, function (fn, cb, prev) {
        var args = [cb, prev];
        if (additionalArgs.length){
            args = additionalArgs.concat(args);
        }
        fn.apply(fn, args);
    }, done);
}

function callIfFunction(fn) {
    if (typeof fn === "function") {
        fn();
    }
}


module.exports = {
    eachSeries: eachSeries,
    series: series,
    eachParallel: eachParallel,
    parallel: parallel
};