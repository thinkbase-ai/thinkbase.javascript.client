 class GraphElement {

     private _id: string = "";
     private _name: string = "";
     private _lineage: string = "";
     private _existence: DarlTime[];
     private _inferred: boolean = false;
     private __Virtual: boolean = false;
     private _properties: GraphAttribute[];
     private _dynamicSource: string = "";


     public get id() { return this._id; }
     public get name() { return this._name; }
     public get lineage() { return this._lineage; }
     public get existence() { return this._existence; }
     public get inferred() { return this._inferred; }
     public get _virtual() { return this.__Virtual; }
     public get properties() { return this._properties; }
     public get dynamicSource() { return this._dynamicSource; }

     public set id(ext: string) {this._id = ext; }
     public set name(ext: string) { this._name = ext; }
     public set lineage(ext: string) { this._lineage = ext;; }
     public set existence(ext: DarlTime[]) { this._existence = ext; }
     public set inferred(ext: boolean) { this._inferred = ext; }
     public set _virtual(ext: boolean) { this.__Virtual = ext; }
     public set properties(ext: GraphAttribute[]) {this._properties = ext; }
     public set dynamicSource(ext: string) {his._dynamicSource = ext; }

}