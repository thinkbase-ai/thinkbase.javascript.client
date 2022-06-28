class StringGraphObjectPair {
    private _name: string = "";
    private _value: GraphObject;

    public get name() {
        return this._name;
    }

    public set name(inName: string) {
        this._name = inName;;
    }

    public get value() {
        return this._value;
    }

    public set value(inObj: GraphObject) {
        this._value = inObj;
    }
}