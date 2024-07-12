const Queue = require('../Fresh_Prep/queue');

describe('Queue', () => {
    it('should not exceed max size', async () => {
        const queue = new Queue(2);
        await queue.enqueue(1);
        await queue.enqueue(2);

        const enqueuePromise = queue.enqueue(3);

        setTimeout(async () => {
            await queue.dequeue();
        }, 100);  // Delay dequeue to simulate queue processing

        await enqueuePromise;

        expect(queue.queue.length).toBe(2);
        expect(queue.queue).toEqual([2, 3]);
    });

    it('should block dequeue when empty', async () => {
        const queue = new Queue(2);
        const dequeuePromise = queue.dequeue();

        setTimeout(async () => {
            await queue.enqueue(1);
        }, 100);  // Delay enqueue to simulate waiting for new orders

        const dequeued = await dequeuePromise;

        expect(dequeued).toBe(1);
        expect(queue.queue.length).toBe(0);
    });

    it('should block enqueue when full', async () => {
        const queue = new Queue(2);
        await queue.enqueue(1);
        await queue.enqueue(2);

        const enqueuePromise = queue.enqueue(3);

        setTimeout(async () => {
            await queue.dequeue();
        }, 100);  // Delay dequeue to simulate queue processing

        await enqueuePromise;

        expect(queue.queue.length).toBe(2);
        expect(queue.queue).toEqual([2, 3]);
    });
});
