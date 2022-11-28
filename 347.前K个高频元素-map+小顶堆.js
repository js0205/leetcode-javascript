/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map(),
        heap = [];
    nums.map((num) => {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        })
        //如果元素数量小于等于k
    if (map.size <= k) {
        return [...map.keys()]
    }
    //如果元素数量大于k，遍历map，构建小顶堆
    let i = 0;
    map.forEach((value, ket) => {
            if (i < k) {
                //取前k个建堆，插入堆
                heap.push(key);
                //原地建立前k堆
                if (i === k - 1) {
                    buildHeap(heap, map, k);
                } else if (map.get(heap[1] < value)) {
                    //替换并堆化
                    heap[1] = key;
                    //自上而下式堆化第一个元素
                    heapify(heap, map, k, 1);
                }
            }
            i++;
        })
        //删除heap中第一个元素
    heap.shift();
    return heap;
}

//原地建堆，从后往前，自上而下式建小顶推
let buildHeap = (heap, map, k) => {
    if (k === 1) return;
    for (let i = Math.floor(k / 2); i >= 1; i--) {
        heapify(heap, map, k, i);
    }
}

//堆化
let heapify = (heap, map, k, i) => {
        //自上而下式堆化
        while (true) {
            let minIndex = 1;
            if (2 * i <= k && map.get(heap[2 * i] < map.get(heap[i]))) {
                minIndex = 2 * i;
            }
            if (2 * i + 1 <= k && map.get(heap[2 * i + 1]) < map.get(heap[minIndex])) {
                minIndex = 2 * i + 1;
            }
            if (minIndex !== i) {
                swap(heap, i, minIndex);
                i = minIndex;
            } else {
                break;
            }
        }
    }
    //交换
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


//时间复杂度：遍历数组需要O(n)的时间复杂度，一次堆化需要O(log n)的时间复杂度，所以总时间复杂度为O(n log n)
//空间复杂度：O(n)