/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;
        this.heapify();
    }
    heapify() {
        if (this.size() < 2) {
            return;
        }
        for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
    peek() {
        if (this, size() === 0) {
            return null;
        }
        return this.data[0];
    }
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
    bubbleUp(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    size() {
        return this.data.length;
    }
}

var findKthLargest = function(nums, k) {
    const h = new Heap((a, b) => a - b);
    for (const num of nums) {
        h.offer(num);
        if (h.size() > k) {
            h.poll();
        }
    }
    return h.peek();
}