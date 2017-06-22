// eslint.ignore no-invalid-this
// enqueue, dequeue, peek(), isEmpty()

const queue = {
    init() {
        this.head = null;
        this.tail = null;
        return this;
    },
    pushMany(...values) {
        values.forEach((v) => this.push(v));
        return this;
    },
    push(value) {
        const item = {
            value,
            next: null,
        };

        if (this.tail === null) {
            this.head = this.tail = item;
            return this;
        }

        this.tail.next = item;
        this.tail = item;
        return this;
    },
    pop() {
        if (this.head === null) {
            return this;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    },
    peek() {
        return this.head
            ? this.head.value
            : null;
    },
    isEmpty() {
        return !this.head;
    },
};

module.exports = {
    getQueue() {
        return Object.create(queue)
            .init();
    },
};
