class SingleDog {
    show() {
        console.log("单例")
    }
}


SingleDog.getInstance = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new SingleDog()
        }
        return instance
    }
})()
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// console.log(s1 === s2)


class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance;
    }
    getter(key) {
        return localStorage.getItem(key)
    }
    setter(name, val) {
        return localStorage.setItem(name, key)
    }
}

const storage1 = Storage.getInstance()
const storage2 = Storage.getInstance()
storage1.setter("name", "李磊")
const res1 = storage1.getter("name")
const res2 = storage2.getter("name")
console.log(res1 === res2)