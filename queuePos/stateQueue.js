class StateQueue {
    constructor(maxSize) {
        this.queue = [];
        this.maxSize = maxSize;
    }

    enqueue(item) {
        if (this.queue.length < this.maxSize) {
            this.queue.push(item);
            if (this.queue.length === this.maxSize) {
                console.log('Queue is full');
            }
        } else {
            console.log('Cannot add item, queue is full');
        }
    }

    dequeue() {
        if (this.queue.length > 0) {
            const item = this.queue.shift();
            if (this.queue.length === 0) {
                console.log('Queue is empty');
            }
            return item;
        } else {
            console.log('Cannot remove item, queue is empty');
            return null;
        }
    }
}

const lineUp = new StateQueue(4); 

lineUp.enqueue(1);
lineUp.enqueue(2);
lineUp.enqueue(3);
lineUp.enqueue(4);
lineUp.enqueue(5);

console.log(lineUp.queue); 