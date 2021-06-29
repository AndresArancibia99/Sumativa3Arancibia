import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariopedido',
  templateUrl: './formulariopedido.component.html',
  styleUrls: ['./formulariopedido.component.css'],
})
export class FormulariopedidoComponent implements OnInit {
  totalDinero?:any;
  formpedido: any = {
    pais: '',
    region: '',
    ciudad: '',
    calle: '',
    codigopostal: ''
  }

  AgregarPedido() {
    if (this.formpedido.pais == '' || this.formpedido.region == '' || this.formpedido.calle == '' || this.formpedido.ciudad == '' || this.formpedido.codigopostal == '') {
      alert('Rellene todos los campos, porfavor.');
      return;
    } else if((this.formpedido.codigopostal).toString().length != 7){
      alert('Recuerde que su Codigo Postal debe tener 7 digitos')
      return;
    } else if((this.formpedido.pais).toString().length < 3){
      alert('El pais debe contener almenos 3 caracteres')
      return;
    } else if((this.formpedido.pais).toString().length > 15){
      alert('El pais debe tener un maximo de 15 caracteres')
      return;
    }else if((this.formpedido.region).toString().length < 3){
      alert('La Region debe contener almenos 3 caracteres')
      return;
    }else if((this.formpedido.region).toString().length > 15){
      alert('La Region debe tener un maximo de 15 caracteres')
      return;
    }else if((this.formpedido.ciudad).toString().length < 3){ 
      alert('La Ciudad debe contener almenos 3 caracteres')
      return;
    }else if((this.formpedido.ciudad).toString().length > 15){ 
      alert('La Ciudad debe tener un maximo de 15 caracteres')
      return;
    }else if((this.formpedido.calle).toString().length > 25){
      alert('La Calle debe tener un maximo de 25 caracteres')
      return;
    }else if((this.formpedido.calle).toString().length < 3){ 
      alert('La Calle debe contener almenos 3 caracteres')
    }else{alert('Pedido Agendado, Su pedido se encontrara en su domicilio en 3 dias habiles. Muchas Gracias por la preferencia!')
    window.location.href = "./productos"
      this.formpedido.push({
        pais: this.formpedido.pais,
        region: this.formpedido.region,
        ciudad: this.formpedido.ciudad,
        calle: this.formpedido.calle,
        codigopostal: this.formpedido.codigopostal,
      });
      window.location.href = "./pago"
    }
  }
  ngOnInit(): void {
    if(localStorage.getItem("total")){
      this.totalDinero = JSON.parse(localStorage.getItem("total") || '{}')
    }
  }
}
