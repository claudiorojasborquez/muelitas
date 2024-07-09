class Diente{
    constructor(a, b, c, d, e){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
}


const DIENTES_COUNT = 32;
let mandibula = (new Array(DIENTES_COUNT)).fill().map((e) => { return new Diente()});

function dibujarDiente(diente, ctx){

}

function dibujarMandibula(mandibula){


}




module.exports =  {Diente, mandibula}