class GraphConnectionInput {

    private _existence: DarlTimeInput[];
    private _lineeage: string;
    private _name: string;
    private _startId: string;
    private _endId: string;
    private _weight: number = 1.0;

    public get existence() { return this._existence; }
    public get lineeage() { return this._lineeage; }
    public get name() { return this._name; }
    public get startId() { return this._startId; }
    public get endId() { return this._endId; }
    public get weight() { return this._weight; }

    public set existence(ext: DarlTimeInput[]) {this._existence = ext; }
    public set lineeage(ext: string) {this._lineeage = ext; }
    public set name(ext: string) {this._name = ext; }
    public set startId(ext: string) {this._startId = ext; }
    public set endId(ext: string) {this._endId = ext; }
    public set weight(ext: number) {this._weight = ext; }
    
}