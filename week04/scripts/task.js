
console.log('==========第4周作业 start==========')

console.log('第3小课：在一个字符串中，找到字符”a”')

function match3(str) {
    return str.indexOf('a') > -1
}

console.log('第3小课', match3('ewdaj'))

console.log('第4小课：不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”')
function match4(str) {
    const strArr = str.split('')
    for (let key of 'ab') {
        if (!strArr.includes(key)) {
            return false
        }
    }
    return true
}

console.log('第4课：', match4('I look cba'))

console.log('第5小课：不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”')

function match5(str) {
    const strArr = str.split('')
    for (let key of 'abcdef') {
        if (!strArr.includes(key)) {
            return false
        }
    }
    return true
}

console.log('第5小课：', match5('a b c d e f'))

console.log('第7小课：用状态机实现：字符串“abababx”的解析')

function match(str) {
    let state = start
    for (let c of str) {
        state = state(c)
    }
    return state === end
}

function start(c) {
    return c === 'a' ? foundA : start
}

function end(e) {
    return end
}

function foundA(c) {
    return c === 'b' ? foundB : start(c)
}

function foundB(c) {
    return c === 'a' ? foundA1 : start(c)
}

function foundA1(c) {
    return c === 'b' ? foundB1 : start(c)
}

function foundB1(c) {
    return c === 'a' ? foundA2 : start(c)
}

function foundA2(c) {
    return c === 'b' ? foundB2 : start(c)
}

function foundB2(c) {
    return c === 'x' ? end : start(c)
}

console.log('第7小课2：', match('babababxabababx'))

console.log('==========第4周作业   end==========')
