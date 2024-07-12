class Queue{
    constructor(maxSize){
        this.queue = [];
        this.maxSize = maxSize;
        this.resolveEnqueue = null;
        this.resolveDequeue = null;  
     }


     async enqueue(order){
        while(this.queue.length >= this.maxSize) {
            await new Promise(resolve => this.resolveEnqueue = resolve) 
        } 
        this.queue.push(order)

        if(this.resolveDequeue) {
            this.resolveEnqueue();
            this.resolveDequeue = null
        }

     }
}