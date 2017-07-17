class Todo {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }

    get id() {
        return this._id;
    }

    static toViewModel(model) {
        const viewModel = new Todo();

        Object.keys(model)
            .forEach((prop) => {
                viewModel[prop] = model[prop];
            });

        return viewModel;
    }

    static isValid(model) {
        return !!model &&
            typeof model.text !== 'undefined' &&
            typeof model.category !== 'undefined';
    }
}

module.exports = Todo;
