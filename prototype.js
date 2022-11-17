class Dog {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    eat() {
        console.log("爱吃肉骨头")
    }
}
const myDog = new Dog("小黑", "black")
// console.warn(myDog.color)\\


function deepClone(obj) {
    /* 如果不是对象类型   或者 为  null类型   直接返回 */
    if (typeof obj !== "object" || obj === null) {
        return obj
    }
    let copy = {}
    /* 如果是数组类型 定义类型为数组 */
    if (obj.constructor === Array) {
        copy = []
    }

    for (let key in obj) {
        // 如果key是对象的自有属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用深拷贝方法
            copy[key] = deepClone(obj[key])
        }
    }
    return copy

}


/* 
1. obj: ['code', 'book', 'Swimming']
2. copy：[]
3. copy: ['code','book','Swimming']
递归：自己调自己，直到发现边界值
*/


const person = {
    name: "李雷",
    age: 20,
    hobbies: ['code', 'book', 'Swimming']
}


const hmm = deepClone(person)
hmm.name = "韩梅梅"
hmm.hobbies.splice(0, 1, 'doll')
console.log(hmm)
console.log(person)

