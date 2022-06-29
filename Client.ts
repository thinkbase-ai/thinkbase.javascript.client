import { request, GraphQLClient } from 'graphql-request'


class Client {

    private _graphName: string;
    private client: GraphQLClient;
    private _model: GraphModel;

    constructor(authcode: string, graphName: string, path: string = "https://darl.dev/graphql", noSubs: boolean = false) {
        this._graphName = graphName;
        this.client = new GraphQLClient(path, { headers: { authorization: 'Basic ' + authcode } });
    }


    public async ClearAllKnowledgeStates(): Promise<number> {
        const data = await this.client.request(
         "mutation ($name: String!){ deleteAllKnowledgeStates(name: $name)}",
            { name: this._graphName }
        );
        return data;
    }

    public async CreateGraphConnection(gc: GraphConnection): Promise<GraphConnection> {

        const data = await this.client.request(
            "mutation ($name: String! $graphConnection: graphConnectionInput!){createGraphConnection(graphName: $name graphConnection: $graphConnection ontology: BUILD){id}}",
            { name: this._graphName, graphConnection: this.Convert(gc) }
        );
        gc.id = data.createGraphConnection.id;
        return gc;
    }

    public async CreateGraphObject(go: GraphObject): Promise<GraphObject> {

    }

    public async CreateKGraph(): Promise<boolean> {

    }

    public async CreateKnowledgeState(ks: KnowledgeState, asSystem: boolean, transient: boolean): Promise<KnowledgeState> {

    }

    public async CreateKnowledgeStateBatched(ksl: KnowledgeState[], transient: boolean) : Promise < KnowledgeState[]> {

    }

    public async DeleteKGraph() : Promise < boolean > {

    }

    DeleteKnowledgeState(subjectId: string, asSystem: boolean  = false): Promise<KnowledgeState> {

    }


    public async ExportNodaModel(): Promise<String> {

        const data = await this.client.request(
            "query ($name: String! ){exportNoda(graphName: $name)}",
            { name: this._graphName }
        );
        return data.exportNoda;
    }

    public async FetchModel(asSystem: boolean = false): Promise<GraphModel> {

        const data = await this.client.request(
            "query ($name: String! $ass: Boolean){kGraphByName(name: $name asSystem: $ass){name model{vertices{name value{lineage subLineage id externalId properties{lineage name value type existence {raw precision } properties{lineage name value type existence {raw precision } }} existence {raw precision }}} edges {name value{lineage endId startId name inferred weight id existence {raw precision }}}}}}",
            { name: this._graphName, ass: asSystem }
        );
        this._model = data.kGraphByName.model;
        this._model.Init();
        return this._model;
    }

    GetChildKnowledgeStates(parentId: string, asSystem: boolean = false ) : Promise<List<KnowledgeState>> {

    }

    GetChildKnowledgeStatesWithAttributeValue(parentId: string, attLineage: string, attValue: string, asSystem: boolean = false ) : Promise<KnowledgeState[]> {

    }

    GetGraphAttributeByAttName(ks: KnowledgeState, nodeName: string, attName: string) : Promise<GraphAttribute> {

    }

    GetGraphAttributeByLineage(ks: KnowledgeState, nodeName: string, lineage: string) : Promise<GraphAttribute> {

    }

    GetInteractKnowledgeState(conversationId: string ): Promise<KnowledgeState> {

    }

    GetKnowledgeState(subjectId: string ): Promise<KnowledgeState> {

    }

    Interact(conversationId: string, message: string ): Promise<Interaction[]> {

    }

    MailShot(collateral: string, subject: string, sendfrom: string, test: boolean ): Promise<number> {

    }

    NodaView(): Promise<string> {

    }
        
    SetConnectionPresence(ks: KnowledgeState, nodeName: string, destName: string, remoteSubjectId: string ): Promise {

    }

    SetDataValue(ks: KnowledgeState, nodeName: string, attName: string, value: string): Promise {

    }

    SetObjectExistence(ks: KnowledgeState, nodeName: string, existence: DarlTime[] ) : Promise {

    }


    SubscribeToBuild(name: string, data: string, patternPath: string, dataMaps: DataMap[]) : IObservable < DarlMineReport > {

    }


    SubscribeToSeek(nodeName: string ): Promise<IObservable<KnowledgeStateInput>> {

    }

    DeleteAttributeByName(objectName: string, attName: string ): Promise<boolean> {

    }

    AddAttributeByName(objectName: string, att: GraphAttribute ): Promise<boolean> {

    }

    AddSubAttributeByName(objectName: string, attName: string, subAtt: GraphAttribute ): Promise<boolean> {

    }

    DeleteSubAttributeByName(ObjectName: string, attName: string, subAttName: string ): Promise<boolean> {

    }


    private Convert(gc: GraphConnection): GraphConnectionInput  {
        List<DarlTimeInput> ? existence = null;
        if (gc.existence != null) {
            existence = new List<DarlTimeInput>();
            foreach(var e in gc.existence)
            {
                existence.Add(Convert(e));
            }
        }
        return new GraphConnectionInput { existence = existence, name = gc.name, lineage = gc.lineage, startId = gc.startId, endId = gc.endId };
    }


}