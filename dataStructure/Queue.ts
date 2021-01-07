interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    size(): number;
}

class Queue<T> implements IQueue<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    enqueue(item: T): void {
        if(this.size()===this.capacity){
            throw Error("Queue has reached max capacity");
        }
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift();
    }
    size(): number {
        return this.storage.length;
    }
}

const queue = new Queue<string>();

queue.enqueue("A");
queue.enqueue("B");
queue.size();
queue.dequeue();
queue.size();