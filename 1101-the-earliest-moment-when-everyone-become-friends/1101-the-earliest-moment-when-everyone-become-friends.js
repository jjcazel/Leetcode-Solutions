/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */

//O(N + M log(M) + M(N)) time and O(N + M) space where N is the num of people and M is the num of logs
class UnionFind {
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size).fill(0);
        this.count = size;
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
        }
    }
//
    find(person) {
        if (this.parent[person] !== person) {
            this.parent[person] = this.find(this.parent[person]);
        }
        return this.parent[person];
    }

    union(person1, person2) {
        const rootPersonOne = this.find(person1);
        const rootPersonTwo = this.find(person2);

        if (rootPersonOne !== rootPersonTwo) {
            if (this.rank[rootPersonOne] > this.rank[rootPersonTwo]) {
                this.parent[rootPersonTwo] = rootPersonOne;
            } else if (this.rank[rootPersonOne] < this.rank[rootPersonTwo]) {
                this.parent[rootPersonOne] = rootPersonTwo;
            } else {
                this.parent[rootPersonTwo] = rootPersonOne;
                this.rank[rootPersonOne]++;
            }
            this.count--;
        }
    }

    connected() {
        return this.count === 1;
    }
}

//O(M log(M)) time and O(M) space
const earliestAcq = (logs, n) => {
    const sortedLogs = logs.sort((a, b) => a[0] - b[0]);
    const uf = new UnionFind(n);

    for (const [timestamp, person1, person2] of sortedLogs) {
        uf.union(person1, person2);
        if (uf.connected()) {
            return timestamp;
        }
    }

    return -1;
};