import { testCasesType1Type } from "./sortingConfig";

class Solution {
    insertionSort(nums: number[]): number[] {
        const numscp = nums.slice();
        let temp: number;
        for (let i = 1; i < numscp.length; ++i) {
            for (let j = i; j > 0; --j) {
                if (numscp[j-1] < numscp[j]) break

                temp = numscp[j-1];
                numscp[j-1] = numscp[j] 
                numscp[j] = temp 
            }
        }
        return numscp
    }
}
export default new Solution().insertionSort;

export const testCasesType1: testCasesType1Type = [
    [
        [7, 4, 1, 5, 3],
        [1, 3, 4, 5, 7],
    ],
    [
        [5, 4, 4, 1, 1],
        [1, 1, 4, 4, 5],
    ],
];
