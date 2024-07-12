class Queue {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
    }

    async enqueue(order) {
        while (this.queue.length >= this.maxSize) {
            await new Promise(resolve => setTimeout(resolve, 100)); 
        }
        this.queue.push(order);
    }

    async dequeue() {
        while (this.queue.length === 0) {
            await new Promise(resolve => setTimeout(resolve, 100)); 
        }
        return this.queue.shift();
    }
}

// Usage example
const MAX_QUEUE_SIZE = 4;
const orderQueue = new Queue(MAX_QUEUE_SIZE);

async function placeOrder(data) {
    while (true) {
        const order = createOrder(data); // Assume createOrder function exists
        await orderQueue.enqueue(order);
    }
}

async function processOrder() {
    while (true) {
        const order = await orderQueue.dequeue();
        processActualOrder(order); // Assume processActualOrder function exists
    }
}

module.exports = { Queue };
