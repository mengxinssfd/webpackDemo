export class Animal {
    private _name: String = "";
    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    constructor(name: String) {
        this._name = name;
    }

    jump() {
        console.log(this._name, "jumping");
    }
}
