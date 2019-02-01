import {Animal} from "./animal";

export class Cat extends Animal {
    constructor(name: String = "cat") {
        super(name);
    }

    jump() {
        console.log(this.name, "jump");
    }
}