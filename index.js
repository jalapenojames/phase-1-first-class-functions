function receivesAFunction(callback) {
        callback();
}

function returnsANamedFunction() {
    const namedFunction = function() {
        return 'complete'
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){}
}