// eslint.ignore no-invalid-this
// enqueue, dequeue, peek(), isEmpty()

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(...values) {
        values.forEach((value) => {
            const item = {
                value,
                next: null,
            };

            if (this.tail === null) {
                this.head = this.tail = item;
            } else {
                this.tail.next = item;
                this.tail = item;
            }
            this.length += 1;
        });

        return this;
    }

    pop() {
        if (this.head === null) {
            return this;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length -= 1;
        return value;
    }

    peek() {
        return this.head
            ? this.head.value
            : null;
    }

    isEmpty() {
        return !this.head;
    }
}

const getQueue = () => {
    return new Queue();
};

module.exports = { Queue, getQueue };
