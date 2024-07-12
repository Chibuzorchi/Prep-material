class Queue {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
        this.resolveEnqueue = null;
        this.resolveDequeue = null;
    }

    async enqueue(order) {
        while (this.queue.length >= this.maxSize) {
            await new Promise(resolve => this.resolveEnqueue = resolve);
        }
        this.queue.push(order);
        if (this.resolveDequeue) {
            this.resolveDequeue();
            this.resolveDequeue = null;
        }
    }

    async dequeue() {
        while (this.queue.length === 0) {
            await new Promise(resolve => this.resolveDequeue = resolve);
        }
        const order = this.queue.shift();
        if (this.resolveEnqueue) {
            this.resolveEnqueue();
            this.resolveEnqueue = null;
        }
        return order;
    }
}

// Usage example
const MAX_QUEUE_SIZE = 4;
const orderQueue = new Queue(MAX_QUEUE_SIZE);

async function placeOrder(data) {
    while (true) {
        const order = OrderFactory.produceOrder(data);
        await orderQueue.enqueue(order);
    }
}

async function processOrder() {
    while (true) {
        const order = await orderQueue.dequeue();
        do_actual_processing(order);
    }
}
