const tryCatchWrapper = enpointFn => {
    return async (req, res, next) => {
        try {
            await enpointFn(req, res, next);
        } catch (error) {
            return console.error(error);
        }
    };
};

module.exports = tryCatchWrapper;