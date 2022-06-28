class GraphModel {

    private _vertices: StringGraphObjectPair[];
    private _edges: StringGraphConnectionPair[];
    private _virtualVertices: StringGraphObjectPair[];
    private _virtualEdges: StringGraphConnectionPair[];
    private _recognitionRoots: StringGraphObjectPair[];
    private _recognitionVertices: StringGraphObjectPair[];
    private _recognitionEdges: StringGraphConnectionPair[];
    private _objects: Map<string, GraphObject>;
    private _objectsByExternalId: Map<string, GraphObject>;
    private _connections: Map<string, GraphConnection>;

    public get vertices() { return this._vertices }
    public set vertices(invert: StringGraphObjectPair[]) { this._vertices = invert }
    public get edges() { return this._edges }
    public set edges(invert: StringGraphConnectionPair[]) { this._edges = invert }
    public get virtualVertices() { return this._virtualVertices }
    public set virtualVertices(invert: StringGraphObjectPair[]) { this._virtualVertices = invert }
    public get virtualEdges() { return this._virtualEdges }
    public set virtualEdges(invert: StringGraphConnectionPair[]) { this._virtualEdges = invert }
    public get recognitionRoots() { return this._recognitionRoots }
    public set recognitionRoots(invert: StringGraphObjectPair[]) { this._recognitionRoots = invert }
    public get recognitionVertices() { return this._recognitionVertices }
    public set recognitionVertices(invert: StringGraphObjectPair[]) { this._recognitionVertices = invert }
    public get recognitionEdges() { return this._recognitionEdges }
    public set recognitionEdges(invert: StringGraphConnectionPair[]) { this._recognitionEdges = invert }

    public get Objects() { return this._objects }
    public set Objects(invert: Map<string, GraphObject>) { this._objects = invert }
    public get ObjectsByExternalId() { return this._objectsByExternalId }
    public set ObjectsByExternalId(invert: Map<string, GraphObject>) { this._objectsByExternalId = invert }
    public get Connections() { return this._connections }
    public set Connections(invert: Map<string, GraphConnection>) { this._connections = invert }

    public Init()
    {
        if (this._vertices != null && this._edges != null) {
            const mappedVerts = this._vertices.map(x => [x.name, x.value] as [string, GraphObject]);
            this.Objects = new Map<string, GraphObject>(mappedVerts);
            const mappedVertsByExt = this._vertices.map(x => [x.value.externalId, x.value] as [string, GraphObject]);
            this.ObjectsByExternalId = new Map<string, GraphObject>(mappedVertsByExt);
            const mappedConns = this._vertices.map(x => [x.name, x.value] as [string, GraphConnection]);
            this.Connections = new Map<string, GraphConnection>(mappedConns);
        }
    }
}