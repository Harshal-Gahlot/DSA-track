// https://takeuforward.org/plus/dsa/problems/bubble-sort

import { testCasesType1Type, testCasesType2Type } from "./sortingConfig";

// Given an array of integers called nums,sort the array in non-decreasing
// order using the bubble sort algorithm and return the sorted array.

class Solution {
    bubbleSort(nums: number[]) {
        const numscp = nums.slice();
        for (let i = 0; i < numscp.length; ++i) {
            for (let j = 0; j < numscp.length - 1 - i; ++j) {
                if (numscp[j] > numscp[j + 1]) {
                    const temp = numscp[j];
                    numscp[j] = numscp[j + 1];
                    numscp[j + 1] = temp;
                }
            }
        }
        return numscp;
    }
}

export default new Solution().bubbleSort;
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
