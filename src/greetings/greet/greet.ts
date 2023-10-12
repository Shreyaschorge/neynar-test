

export class Greetings {
    constructor(public name: string) {
    }

    sayHello() {
        console.log(`\nHello 🙋‍♀️ ${this.name}...!!!\nIts good to see you here.\n`)
        console.log("------------------------------------");
    }

    sayHi() {
        console.log(`\nHi 🙋 ${this.name}...!!!\nIts good to see you here.\n`)
        console.log("------------------------------------");
    }

}