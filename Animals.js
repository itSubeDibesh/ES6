// #region 11 & 12. Import, Export & Classes

// console.log("12. Classes")
export default class Animal {
    myName
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
    setName(name) {
        this.myName = name;
    }
    get info() {
        return `I am ${this.type}.\nI have ${this.legs} legs.\n${this.myName ? `I'm ${this.myName}` : ""}`;
    }
    static about() {
        return `Animals are multi-cellular organisms.
        You are invoking ${this.name} class.
        `
    }
}

export class Cat extends Animal {
    constructor(name) {
        super("Cat", 4)
        this.myName = name
    }
    says() {
        console.log(`I say meow.`)
    }
}

export class Dog extends Animal {
    constructor(name) {
        super("Dog", 4)
        this.myName = name
    }
    introduce() {
        console.log(`I am ${this.type}.\n${this.myName ? `My name is ${this.myName}.\n` : ""}I say woof.`)
    }
}

// export {
//     Cat,
//     Dog
// }

// #endregion
