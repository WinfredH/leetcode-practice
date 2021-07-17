/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = [];
    const current = [];
    let visited = {};
    const length = nums.length;

    function dfs(head) {
        if (current.length === length) {
            // 递归边界
            res.push(current.slice());
            return;
        }
        // 每个坑位都要遍历一次nums
        for (let i = 0; i < length; i++) {
            if (typeof visited[nums[i]] === "undefined") {
                current.push(nums[i]);
                visited[nums[i]] = head;
                dfs(++head);
                current.pop();
                delete visited[nums[i]];
            }
        }
    }

    // 开始递归
    dfs(0);

    return res;
};
