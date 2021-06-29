import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  totalDinero?:any;
  
  tarjeta: any={
  TipoTarjeta:'',
  NombreTarjeta:'',
  NumerodeTarjeta:'',
  CVV:'',
  MesExp:'',
  AnoExp:''
               }

  


  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("total")){
      this.totalDinero = JSON.parse(localStorage.getItem("total") || '{}')
    }
  }


  AgregarTarjeta(){
    if(this.tarjeta.TipoTarjeta == '' || this.tarjeta.NombreTarjeta == '' || this.tarjeta.NumerodeTarjeta == '' ||
    this.tarjeta.CVV == '' || this.tarjeta.MesExp == '' || this.tarjeta.AnoExp == ''){
      alert('Rellene todos los campos, porfavor');
      return;
    }else if((this.tarjeta.CVV).toString().length != 3){
      alert('Recuerde que su CVV tiene que ser de 3 digitos')
      return;
    }else if((this.tarjeta.MesExp).toString().length != 2){
      alert('Recuerde que el Mes de Expiracion debe contener 2 digitos, Ejemplo: 01 (Enero)')
      return;
    }else if ((this.tarjeta.AnoExp).toString().length != 4){
      alert('Recuerde que el Año de Expiracion debe contener 4 digitos, Ejemplo: 2024')
      return;
    }else if ((this.tarjeta.NumerodeTarjeta).toString().length != 19){
      alert('El formato de la Tarjeta es de 19 caracteres, incluyendo los espacios, Ejemplo 1111 2222 3333 4444')
      return;
    }else if((this.tarjeta.TipoTarjeta).toString().length > 20){
      alert('El metodo de pago tiene una capacidad máxima de 20 caracteres')
      return;
    }else if((this.tarjeta.TipoTarjeta).toString().length < 5){
      alert('El metodo de pago tiene una capacidad minima de 5 caracteres')
      return;
    }else if((this.tarjeta.NombreTarjeta).toString().length < 5){
      alert('El nombre del titular de la tarjeta tiene una capacidad minima de 5 caracteres')
      return;
    }else if((this.tarjeta.NombreTarjeta).toString().length > 25){
      alert('El nombre del titular de la tarjeta tiene una capacidad maxima de 25 caracteres')
      return;
    }else{
      alert('Tarjeta Aceptada, se le hara un cargo por CLP$ ' + (this.totalDinero*1.19))
      alert('Lo redirigiremos al formulario del envio')
      window.location.href = "./formulariopedido"
    }
  }

  CancelarCompra(){
    alert('Compra Cancelada')
    window.location.href = "./productos"
  }

}