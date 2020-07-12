console.log('==========第二周作业 start==========')

console.log('第8小课：String练习\n写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。')

function UTF8_Encoding(str) {
    console.log('字符串：', str)
    for (let i = 0, len = str.length; i < len; i++) {
        const buf_UTF8 = new Buffer.from(str[i])
        let text = `字符：${str[i]}，二进制字节流：`
        buf_UTF8.toJSON().data.forEach(item => {
            text += `${item.toString(2)} `
        })
        console.log(text)
    }

    let longText = `字符串${str}，二进制字节流：`
    let bitsArr = []
    const buf_UTF8 = new Buffer.from(str)
    buf_UTF8.toJSON().data.forEach(item => {
        bitsArr.push(item.toString(2))
        longText += `${item.toString(2)} `
    })
    console.log(longText)
    return bitsArr
}

UTF8_Encoding('字符串转字节')

console.log('第8小课：Object练习\n用 JavaScript 去设计狗咬人的代码。')

class Dog {
    constructor(name) {
        this.name = name
    }
}

class Human {
    constructor(name) {
        this.name = name
        this.healthValue = 100 // 默认生命值为100
        this.recordList = []
    }

    hurt(damage) {
        let deHealthValue = 0
        switch (damage.hurtValue) {
            case 30:
                deHealthValue = 10
                break
            case 60:
                deHealthValue = 20
                break
            case 90:
                deHealthValue = 30
                break
            default: break
        }
        this.healthValue -= deHealthValue
        this.recordList.push(
            {
                origin: `被${damage.name}咬了`,
                hurtValue: damage.hurtValue,
                remark: `损失${deHealthValue}生命值`
            }
        )
    }
}

const dog = new Dog('旺财')

const human = new Human('小明')

console.log('狗的名字: ', dog.name)

console.log(`小明的信息\n 名字：${human.name}\n 生命值：${human.healthValue}\n 记录：${JSON.stringify(human.recordList)}`)

console.log(`${human.name}被${dog.name}咬了！！！`)

human.hurt({
    name: dog.name,
    hurtValue: 30
})

console.log(`小明的信息\n 名字：${human.name}\n 生命值：${human.healthValue}\n 记录：${JSON.stringify(human.recordList)}`)

console.log('==========第二周作业 end==========')
