import {Animal} from "./animal";
import {test2} from "../common/utils";

export class Cat extends Animal {
    constructor(name: String) {
        super(name + " cat");
    }

    eat() {
        console.log(this.name, "eat fish");
        test2();
    }
}