// https://takeuforward.org/plus/dsa/problems/selection-sort

// Given an array of integers nums, sort the array in non-decreasing
// order using the "SELECTION SORT" Algorithm and return the sorted array.

import { testCasesType1Type, testCasesType2Type } from "./sortingConfig";

class Solution {
    selectionSort(numsOriginal: number[]): number[] {
        const n = numsOriginal.length;
        const nums = numsOriginal.slice();
        if (nums.length === 0) return [];
        for (let i = 0; i < nums.length - 1; ++i) {
            let maxVal = nums.splice(0, 1)[0];
            for (let j = 0; j < nums.length - i; ++j) {
                if (maxVal < nums[j]) {
                    const temp = maxVal;
                    maxVal = nums[j];
                    nums[j] = temp;
                }
            }
            nums.splice(nums.length - i, 0, maxVal);
        }
        return nums;
    }
}

export default new Solution().selectionSort
export const testCasesType1: testCasesType1Type = [
    [
        [7, 4, 1, 5, 3],
        [1, 3, 4, 5, 7],
    ],
    [
        [3, 2, 3, 4, 5],
        [2, 3, 3, 4, 5],
    ],
    [
        [4, 4, 1, 1],
        [1, 1, 4, 4],
    ],
    [
        [5, 6, 4, 2, 3, 8, 1],
        [1, 2, 3, 4, 5, 6, 8],
    ],
];

// let max = 0;
// start:
// [6, 4, 2, 3, 8, 1]; max = 5;
// [5, 4, 2, 3, 8, 1]; max = 6;
// [5, 4, 2, 3, 6, 1]; max = 8;
// [5, 4, 2, 3, 6, 1, 8];

// [4, 2, 3, 6, 1]; max = 5;
// [4, 2, 3, 5, 1]; max = 6;
// [4, 2, 3, 5, 1, 6, 8];

// [2, 3, 5, 1]; max = 4;
// [2, 3, 4, 1]; max = 5;
// [2, 3, 4, 1, 5, 6, 8];

// [3, 4, 1]; max = 2;
// [2, 4, 1]; max = 3;
// [2, 3, 1]; max = 4;
// [2, 3, 1, 4, 5, 6, 8];

// [3, 1]; max = 2;
// [2, 1]; max = 3;
// [2, 1, 3, 4, 5, 6, 8];

// [1]; max = 2;
// [1, 2, 3, 4, 5, 6, 8];
// end;
