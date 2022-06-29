class GraphConnection extends GraphElement{
    private _startId: string;
    private _endId: string;
    private _weight: number = 1.0;

    public get startId() { return this._startId; }
    public get endId() { return this._endId; }
    public get weight() { return this._weight; }
    public set startId(ext: string) { this._startId = ext; }
    public set endId(ext: string) { this._endId = ext; }
    public set weight(ext: number) { this._weight = ext; }

}