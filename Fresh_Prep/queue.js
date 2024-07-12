class Queue{
    constructor(maxSize){
        this.maxSize = maxSize;
        this.queue = [];
        this.resolveEnqueue = null;
        this.resolveDequeue = null;
    }

    async enqueue(orders){
        while(this.queue.length >= this.maxSize) {
            console.log('Queue is full, awaiting process orders');

            await new Promise(resolve => this.resolveEnqueue = resolve)
        }

        this.queue.push(orders

        )
        if(this.queue.length === this.maxSize){
            console.log('Queue is full');
        }

        if(this.resolveDequeue){
            this.resolveDequeue();
            this.resolveDequeue = null
        }
    }


    async dequeue(){
        while(this.queue.length === 0){
            console.log('Queue is empty, awaiting orders');
            await new Promise(resolve => this.resolveDequeue = resolve)
        }

        const orders = this.queue.shift();

        if(this.queue.length === 0){
            console.log('Queue is empty');
        }

        if(this.resolveEnqueue){
            this.resolveEnqueue()
            this.resolveEnqueue = null;
        }

        return orders;
        
    }
}

const lineUps = new Queue(4)

lineUps.enqueue(1)
lineUps.enqueue(2)
lineUps.enqueue(3)
lineUps.enqueue(4)

lineUps.enqueue(5)

console.log(lineUps.queue);

lineUps.dequeue(1)
lineUps.dequeue(2)
lineUps.dequeue(3)
lineUps.dequeue(4)

lineUps.dequeue(5)