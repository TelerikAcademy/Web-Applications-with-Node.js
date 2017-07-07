const getRequestMock = (options = {}) => {
    const req = {};

    Object.keys(options)
        .forEach((key) => {
            req[key] = options[key];
        });
    return options;
};

const getResponseMock = () => {
    return {
        viewName: '',
        model: null,
        render(viewName, context) {
            this.viewName = viewName;
            this.context = context;
            return this;
        },
        status(statusCode) {
            this.statusCode = statusCode;
            return this;
        },
        send(body) {
            this.body = body;
            return this;
        },
        redirect(status, url) {
            if (!url) {
                this.redirectUrl = status;
            } else {
                this.redirectUrl = url;
                this.status = status;
            }

            return this;
        },
    };
};

module.exports = { getRequestMock, getResponseMock };
