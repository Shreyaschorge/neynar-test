

export class Greetings {
    constructor(public name: string, public age: number) {
        if(this.age < 12) {
            throw new Error("You are not allowed to enter");
        } else {
            console.log("------------- Welcome --------------");
        }
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