function sum(...args) {
    if (Array.isArray(args[0])) {
        args = args[0];
    }

    return args.reduce((s, n) => s + n, 0);
}

function multiply(...args) {
    if (Array.isArray(args[0])) {
        args = args[0];
    }

    return args.reduce((s, n) => s * n, 1);
}

module.exports.sum = sum;
module.exports.multiply = multiply;
