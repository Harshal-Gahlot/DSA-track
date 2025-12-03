import Module from "./sortingConfig";
import { testCasesType1Type, testCasesType2Type } from "./sortingConfig";

const start = Module.default;

if ("testCasesType1" in Module) {
    const testCasesType1: testCasesType1Type = (Module as any).testCasesType1;

    testCasesType1.forEach((nums, n) => {
        if (nums === undefined) return;
        let ans: number[] = start(nums[0]);
        let pass = true;

        for (let i = 0; i < nums.length; ++i) {
            if (ans[i] !== nums[1][i]) {
                pass = false;
                break;
            }
        }
        if (pass) {
            console.log(`test case ${n + 1} PASSED [${nums[0]}]\n`);
        } else {
            console.error(
                `test case ${n + 1}th FAILED [${nums[0]}] \nexpected: [${
                    nums[1]
                }] \nbut got : [${ans}]\n`
            );
        }
    });
}

if ("testCasesType2" in Module) {
    const testCasesType2: testCasesType2Type = (Module as any).testCasesType2;

    testCasesType2.forEach((nums) => {
        console.log("nums", start(nums));
    });
}
