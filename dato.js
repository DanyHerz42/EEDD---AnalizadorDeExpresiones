export default class Dato{
  constructor(dato){
    this._dato = dato;
    this._izq = null;
    this._der = null;
  }
  get izq(){
    return this._izq;
  }
  get der(){
    return this._der;
  }
  get dato(){
    return this._dato;
  }
  set der(newDer){
    this._der = newDer;
  }
  set dato(newDato){
    this._dato = newDato;
  }
  set izq(newIzq){
    this._izq = newIzq;
  }
  toString(){
    return this._dato + ",";
  }
}