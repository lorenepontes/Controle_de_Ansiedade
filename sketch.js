
let cont = 0;
let diametro = 10;
let xBolinha = 300;
let yBolinha = 200;
let crescendo = 1;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  textSize(38);
  circle(xBolinha, yBolinha, diametro);
  crescer();
 

}

function crescer(){
  
  
if (diametro >=400){
    crescendo = 2;
    cont = cont;
    }
  
if (diametro <=0){
    crescendo = 1;
  cont = cont;
  }
  
  
if ( crescendo <= 1){
  cont = cont + 50;
  diametro = cont/45;
 
}
  else {    
  cont = cont - 50;
  diametro = cont/45;
  }
  

}

/*
Controle de ansiedade
Lorene Garcia
*/

  
  
  
  
  
