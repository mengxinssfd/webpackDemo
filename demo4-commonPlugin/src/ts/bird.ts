import {Animal} from "./animal";
// import 'babel-polyfill';
import {test2} from "../common/utils";

export class Bird extends Animal {
    constructor(name: String = "") {
        super(name || " bird");
    }

    fly() {
        console.log(this.name, "fly");
        test2();
    }
}