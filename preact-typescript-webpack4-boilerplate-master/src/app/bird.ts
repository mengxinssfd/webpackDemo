import {Animal} from "./animal";
// import 'babel-polyfill';
import {Test} from "../common/utils";

export class Bird extends Animal {
    constructor(name: String) {
        super(name + " bird");
    }

    fly() {
        console.log(this.name, "fly");
        new Test();
    }
}