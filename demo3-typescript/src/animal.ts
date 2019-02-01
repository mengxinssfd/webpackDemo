export class Animal {
    private _name: String = "Animal";

    constructor(name: String) {
        this._name = name;
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    eat() {
        console.log(this.name + " eat");
    }
}