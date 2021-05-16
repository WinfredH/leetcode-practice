const map = {
    "(": ")",
    "{": "}",
    "[": "]"
}

const rightParentheses = Object.values(map)

function isValid(s) {
    if (!s.length) return true;
    if (s.length % 2 !== 0) return false;

    const leftStack = []

    // 遍历字符串
    for (let i = 0, length = s.length; i < length; i++) {
        if (map.hasOwnProperty(s[i])) {
            leftStack.push(s[i])
        } else if (rightParentheses.indexOf(s[i]) > -1) {
            const left = leftStack.pop()
            if (s[i] !== map[left]) return false
        } else {
            return false
        }
    }

    return leftStack.length === 0;
};