class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);
const cuadrado1 = new Rectangulo(1090, 10);


console.log(cuadrado.area); // 100


///////////
Rectangulo.prototype.calcArea = () =>  400;
///////////

console.log(cuadrado.area); // 100

console.log(cuadrado1.area);//400



function Rectangulo2 ( alto1, ancho1 ) 
{ 
  return Object.freeze ({ 
    calcArea2, 
    calcPerimetro,
    alto3_4,
    // others 
  })
  
 // Método
 function calcArea2 () {
   return (alto1 * ancho1)
 }
 function calcPerimetro(){
   return (alto1+ancho1)
 }
 function alto3_4 (){
   return 3*alto1/4
 }

}
// someOtherModule.js
const cuadrado2 = Rectangulo2(10, 10);
const cuadrado22 = Rectangulo2(1090, 10);

console.log(cuadrado2.calcPerimetro()); // 100
console.log(cuadrado22.calcArea2());
console.log(cuadrado2.alto3_4());

///////////
Rectangulo2.prototype.calcArea2 = () =>  400;
///////////
console.log(cuadrado22.calcArea2());
console.log(cuadrado2.calcArea2());

/*class aleatorio{
  constructor()
  {
if ( typeof aleatorio.instance == "object"){
  return aleatorio.instance;
}
  
  
  aleatorio.instance= Math.random();
  return Math.random();
}
}
const ale1=new aleatorio();
console.log(ale1);
const ale2=new aleatorio();
console.log(ale2);*/

