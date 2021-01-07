interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class Stack<T> implements IStack<T> {
    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(item: T): void {
        if(this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more itmes");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const stack = new Stack<string>();
stack.push("A");
stack.push("B");

stack.size();
stack.peek();
stack.size();
stack.pop();
stack.size();
