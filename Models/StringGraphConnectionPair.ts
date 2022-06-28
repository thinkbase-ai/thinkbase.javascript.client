class StringGraphConnectionPair {

    private _name: string = "";
    private _value: GraphConnection;

    public get name() {
        return this._name;
    }

    public set name(inName: string) {
        this._name = inName;;
    }

    public get value() {
        return this._value;
    }

    public set value(inConn: GraphConnection) {
        this._value = inConn;
    }
}