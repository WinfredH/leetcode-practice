const map = {
    "(": ")",
    "{": "}",
    "[": "]"
}

function isValid(s) {
    if (!s.length) return true;
    if (s.length % 2 !== 0) return false;

    const leftStack = []

    // 遍历字符串
    for (let i = 0, length = s.length; i < length; i++) {
        if (map.hasOwnProperty(s[i])) {
            leftStack.push(s[i])
        } else {
            // 如果字符与栈顶字符不匹配，则返回false
            const left = leftStack.pop()
            if (s[i] !== map[left]) return false
        }
    }

    return leftStack.length === 0;
};