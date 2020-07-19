console.log('==========第三周作业 start==========')

console.log('第2小课：类型转换\n完成 StringToNumber 和 NumberToString 两个函数。')

/**
 * Number的四种进制：二进制、八进制、十进制、十六进制
 * StringToNumber 解析4种进制的字符串，将其转换成对应的Number。
 * 判断进制，进入相应的解析流程。
 * */

function StringToNumber(str) {
    const reg2 = /^-*(0b|0B)[01]+$/
    const reg8 = /^-*(0|0o|0O)[0-7]+$/
    const reg10 = /^-*[0-9]+$/
    const reg16 = /^-*(0x|0X)[0-F]+$/
    if (reg2.test(str)) {
        console.log(`二进制数字字符串：${str}`)
        num = str.indexOf('-') > -1 ? 0 - Number(str.substring(1)) : Number(str)
    }
    else if (reg8.test(str)) {
        console.log(`八进制数字字符串：${str}`)
        num = str.indexOf('-') > -1 ? 0 - Number(str.substring(1)) : Number(str)
    }
    else if (reg10.test(str)) {
        console.log(`十进制数字字符串：${str}`)
        num = Number(str)
    }
    else if (reg16.test(str)) {
        console.log(`十六进制数字字符串：${str}`)
        num = str.indexOf('-') > -1 ? 0 - Number(str.substring(1)) : Number(str)
    }
    else {
        throw new Error('非Number类字符串，无法进行数字转换！')
    }
    return num
}

function NumberToString(num, system = 10) {
    const systemList = {
        2: function () {
            return num < 0 ? `-0b${Math.abs(num.toString(2))}` : `0b${num.toString(2)}`
        }(),
        8: function () {
            return num < 0 ? `-0o${Math.abs(num.toString(8))}` : `0o${num.toString(8)}`
        }(),
        10: function () {
            return num.toString()
        }(),
        16: function () {
            return num < 0 ? `-0x${Math.abs(num.toString(16))}` : `0x${num.toString(16)}`
        }()
    }
    return systemList[system]
}

// console.log(StringToNumber('-0b10000000000'))
// console.log(StringToNumber('0o2000'))
// console.log(StringToNumber('1024'))
// console.log(StringToNumber('-0x400'))
//
// console.log(`1024的二进制字符串：${NumberToString(-1024, 2)}`)
// console.log(`1024的八进制字符串：${NumberToString(1024, 8)}`)
// console.log(`1024的十进制字符串：${NumberToString(1024)}`)
// console.log(`1024的十六进制字符串：${NumberToString(-1024, 16)}`)

for (let key in Object.prototype) {
    console.log(key)
}

console.log('==========第三周作业 end==========')
