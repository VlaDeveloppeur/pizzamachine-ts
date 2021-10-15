export default class Pizza{
    static readonly FROMAGE: string = "fromage";
    static readonly AMERICANO: string = "americano";
    static readonly VEGAN: string = "vegan";

    private _recipe:string;
    
    constructor(recipe:string){
        this._recipe=recipe;
    }

    static readonly KINDS: Array<string> = [
      Pizza.FROMAGE,
      Pizza.AMERICANO,
      Pizza.VEGAN,
    ];
}