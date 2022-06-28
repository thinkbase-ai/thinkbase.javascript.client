class GraphObject {

    private _externalId: string;
    private _out: GraphConnection[];
    private _in: GraphConnection[];

    public get externalId() { return this._externalId }
    public set externalId(ext: string) { this._externalId  = ext}

    public get Out() { return this._out }
    public set Out(ext: GraphConnection[]) { this._out = ext }
    public get In() { return this._in }
    public set In(ext: GraphConnection[]) { this._in = ext }

}