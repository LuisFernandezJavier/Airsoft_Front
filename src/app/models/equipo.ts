
export class kdaEquipo {
    private _nombre: string;
    private _tmpkda: number;
    private _codArma: string;
    private _bajas : number;
    private _muertes : number;
    constructor(nombre: string, tmpkda: number , codArma: string , bajas : number , muertes : number) {
        this._nombre = nombre;
        this._tmpkda = tmpkda;
        this._codArma = codArma;
        this._bajas = bajas;
        this._muertes = muertes;
    }
    get nombre() {
        return this._nombre;
    }
    get tmpkda() {
        return this._tmpkda;
    }
    get codArma() {
        return this._codArma;
    }
    get bajas() {
        return this._bajas;
    }
    get muertes() {
        return this._muertes;
    }
}