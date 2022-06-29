enum DataType {
    NUMERIC = 0,
    CATEGORICAL = 1,
    TEXTUAL = 2,
    SEQUENCE = 3,
    TEMPORAL = 4,
    DURATION = 5,
    MARKDOWN = 6,
    RULESET = 7,
    LINK = 8,
    CONNECTION = 9
}



class GraphAttribute extends GraphElement{

    private _value: string = "";
    private _confidence: number = 1.0;
    private _type: DataType;

    public get value() {return this._value }
    public get confidence() { return this._confidence }
    public get type() { return this._type }
    public set value(ext: string) { this._value = ext; }
    public set confidence(ext: number) { this._confidence = ext; }
    public set type(ext: DataType) { this._type = ext; }

}