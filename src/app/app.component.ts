import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  palabra = 'MURCIELAGO';
  palabraOculta = '';

  intentos = 0;
  gano = false;
  perdio = false;

  letras = ['A','B','C','D','E','F','G','H',
            'I','J','K','L','M','N','Ñ','O',
            'P','Q','R','S','T','U','V','W',
            'X','Y','Z'];

  constructor(){
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra){

    this.existeLetra(letra);

    const palabraOcultaArray = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letra){
        palabraOcultaArray[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArray.join(' ');
    this.verificarPalabraCompleta();
  }

  verificarPalabraCompleta(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra){
      this.gano = true;
    }

    if(this.intentos >= 9){
      this.perdio = true;
    }
  }

  existeLetra(letra){
    if(this.palabra.indexOf(letra) >= 0){
      console.log('letra found');
    }else{
      this.intentos++;
    }
  }
}
