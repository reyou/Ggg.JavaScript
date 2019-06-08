class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        // Custom debugging information
        this.foo = foo;
        this.date = new Date();
    }
}

try {
    throw new CustomError('baz', 'bazMessage');
} catch (e) {
    console.log(e.foo); //baz
    console.log(e.message); //bazMessage
    console.log(e.stack); //stacktrace
}
