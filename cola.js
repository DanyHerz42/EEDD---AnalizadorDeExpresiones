export default class Cola{
  constructor(){
    this._inicio = null;
  }
  meter(nuevo){
    if(!this._inicio){
      this._inicio = nuevo;
    }else{
      let temp = this._inicio;
      while(temp.siguiente){
        temp = temp.siguiente;
      }
      temp.siguiente = nuevo;
    }
  }
  sacar(){
    let temp = this._inicio;
    if(this._inicio.siguiente){
      this._inicio = this._inicio.siguiente;
    }else{
      this._inicio = null;
    }
    
    return temp.dato;
  }
}