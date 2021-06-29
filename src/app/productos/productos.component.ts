import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  template: `
    <app-pago [childMessage]="parentMessage"></app-pago>
  `,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  totalDinero = 0;
  totalCarrito = 0;
  hola = ['hola','como'];
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; 
  productosCantidad = [{
                        codigo: 0,
                        cant: 0,
                      }
  ];


  productos: any[] = [];
  productosActual1 = [   // Reset
    {
      codigo: 250, nombre: 'Camiseta AC MILAN', precio: 16090,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/polera1.jpg',
      tags : "ac milan, camiseta"
    },
    {
      codigo: 251, nombre: 'Camiseta BVB Dortmund', precio: 24990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/polera2.jpg',
      tags : "bvb dortmund, camiseta, evostripe"
    },
    {
      codigo: 252, nombre: 'Camiseta Manchester City Local', precio: 19990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera3.jpg',
      tags : "camiseta, manchester city, mancity, local"
    },
    {
      codigo: 253, nombre: 'Polera PUMA X PEANUTS AMARILLA', precio: 22990,
      descripcion: 'Talla XS HOMBRE', img: '../../assets/img/polera4.jpg',
      tags : "polera, puma, peanuts, amarilla, peanuts amarilla"
    },
    {
      codigo: 254, nombre: 'Polera PUMA X PEANUTS BLANCA', precio: 22990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera5.jpg',
      tags : "polera, peanuts, puma, blanca, peanuts blanca"
    },
    {
      codigo: 255, nombre: 'Polera PUMA X VON DUTCH', precio: 19990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/polera6.jpg',
      tags : "polera, puma, von dutch, vondutch"
    },
    {
      codigo: 256, nombre: 'POLERA PUMA X PEANUTS NEGRA', precio: 22990,
      descripcion: 'Talla XL HOMBRE', img: '../../assets/img/polera7.jpg',
      tags : "polera, peanuts, puma, negra, peanuts negra"
    },
    {
      codigo: 257, nombre: 'POLERA PARA HOMBRE ESSENTIALS', precio: 12990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/polera8.jpg',
      tags : "polera, essentials, heather, polera para hombre essentials heather"
    },
    {
      codigo: 258, nombre: 'POLERA CON ESTAMPADO GRÁFICO', precio: 10490,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera9.jpg',
      tags : "estampado, gráfico, camuflaje, polera"
    },
    {
      codigo: 259, nombre: 'POLERÓN CON CAPUCHA PEANUTS', precio: 49990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/poleron1.jpg',
      tags : "poleron, capucha, peanuts, puma"
    },
    {
      codigo: 260, nombre: 'POLERÓN CON ESTAMPADO GRÁFICO', precio: 54990,
      descripcion: 'Talla XS HOMBRE', img: '../../assets/img/poleron2.jpg',
      tags : "poleron, polerón, estampado, grafico"
    },
    {
      codigo: 261, nombre: 'POLERÓN CON CAPUCHA NEYMAR JR.', precio: 42990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/img/poleron3.jpg',
      tags : "neymarjr, capucha, poleron"
    },
    {
      codigo: 262, nombre: 'POLERÓN CON CAPUCHA RACING', precio: 35990,
      descripcion: 'Talla XL HOMBRE', img: '../../assets/img/poleron4.jpg',
      tags : "poleron, polerón, capucha, racing, double"
    },
    {
      codigo: 263, nombre: 'POLERÓN CON CAPUCHA RED BULL', precio: 45990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/poleron5.jpg',
      tags : "poleron, polerón, capucha, red bull, red"
    },
    {
      codigo: 264, nombre: 'POLERÓN CON ESTAMPADO GRÁFICO', precio: 49990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/poleron6.jpg',
      tags : "poleron, estampado, grafico"
    },
    {
      codigo: 265, nombre: 'POLERÓN CON CAPUCHA AZUL', precio: 42990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/poleron7.jpg',
      tags : "poleron, capucha, azul, logotipo"
    }
  ];

  productosActual = [   // Array para items en stock
    {
      codigo: 250, nombre: 'Camiseta AC MILAN', precio: 16090,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/polera1.jpg',
      tags : "ac milan, camiseta"
    },
    {
      codigo: 251, nombre: 'Camiseta BVB Dortmund', precio: 24990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/polera2.jpg',
      tags : "bvb dortmund, camiseta, evostripe"
    },
    {
      codigo: 252, nombre: 'Camiseta Manchester City Local', precio: 19990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera3.jpg',
      tags : "camiseta, manchester city, mancity, local"
    },
    {
      codigo: 253, nombre: 'Polera PUMA X PEANUTS AMARILLA', precio: 22990,
      descripcion: 'Talla XS HOMBRE', img: '../../assets/img/polera4.jpg',
      tags : "polera, puma, peanuts, amarilla, peanuts amarilla"
    },
    {
      codigo: 254, nombre: 'Polera PUMA X PEANUTS BLANCA', precio: 22990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera5.jpg',
      tags : "polera, peanuts, puma, blanca, peanuts blanca"
    },
    {
      codigo: 255, nombre: 'Polera PUMA X VON DUTCH', precio: 19990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/polera6.jpg',
      tags : "polera, puma, von dutch, vondutch"
    },
    {
      codigo: 256, nombre: 'POLERA PUMA X PEANUTS NEGRA', precio: 22990,
      descripcion: 'Talla XL HOMBRE', img: '../../assets/img/polera7.jpg',
      tags : "polera, peanuts, puma, negra, peanuts negra"
    },
    {
      codigo: 257, nombre: 'POLERA PARA HOMBRE ESSENTIALS', precio: 12990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/polera8.jpg',
      tags : "polera, essentials, heather, polera para hombre essentials heather"
    },
    {
      codigo: 258, nombre: 'POLERA CON ESTAMPADO GRÁFICO', precio: 10490,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/polera9.jpg',
      tags : "estampado, gráfico, camuflaje, polera"
    },
    {
      codigo: 259, nombre: 'POLERÓN CON CAPUCHA PEANUTS', precio: 49990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/poleron1.jpg',
      tags : "poleron, capucha, peanuts, puma"
    },
    {
      codigo: 260, nombre: 'POLERÓN CON ESTAMPADO GRÁFICO', precio: 54990,
      descripcion: 'Talla XS HOMBRE', img: '../../assets/img/poleron2.jpg',
      tags : "poleron, polerón, estampado, grafico"
    },
    {
      codigo: 261, nombre: 'POLERÓN CON CAPUCHA NEYMAR JR.', precio: 42990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/img/poleron3.jpg',
      tags : "neymarjr, capucha, poleron"
    },
    {
      codigo: 262, nombre: 'POLERÓN CON CAPUCHA RACING DOUBLE', precio: 35990,
      descripcion: 'Talla XL HOMBRE', img: '../../assets/img/poleron4.jpg',
      tags : "poleron, polerón, capucha, racing, double"
    },
    {
      codigo: 263, nombre: 'POLERÓN CON CAPUCHA RED BULL', precio: 45990,
      descripcion: 'Talla L HOMBRE', img: '../../assets/img/poleron5.jpg',
      tags : "poleron, polerón, capucha, red bull, red"
    },
    {
      codigo: 264, nombre: 'POLERÓN CON ESTAMPADO GRÁFICO', precio: 49990,
      descripcion: 'Talla S HOMBRE', img: '../../assets/img/poleron6.jpg',
      tags : "poleron, estampado, grafico"
    },
    {
      codigo: 265, nombre: 'POLERÓN CON CAPUCHA AZUL CON LOGOTIPO', precio: 42990,
      descripcion: 'Talla M HOMBRE', img: '../../assets/img/poleron7.jpg',
      tags : "poleron, capucha, azul, logotipo"
    }
  ];
  productosCarritoActual: any;
  page_size: number = 12;
  page_number: number = 1;
  pageSizeOptions = [12, 16]
  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  constructor(private router:Router){}

  
  ngOnInit(){
    //this.totalLength = result.length;
  }

  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
    
    }
    else{
      console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
    
    }

  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
  

  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
       
      }
    }
    
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }
    alert("Para mostrar la busqueda de los objetos seleccione el maximo de objetos, en este caso 16 en los items per page :)")
  }

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio, 
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags});
      }
    this.productosActual = this.productosActual1;
    this.page_size = 16;
  }

  Total(){
    if (this.totalDinero == 0){
      alert('No tiene Productos en el carrito de compras, selecciona alguno de los productos')
      return;
    }
    let total=0;
      total = this.totalDinero;
    localStorage.setItem("total", JSON.stringify(this.totalDinero));
    window.location.href = "./pago"
  
}














  Validar(){
    for(let i = 0;i<this.productosCarrito.length;i++){
        alert('No tiene productos en su carrito de compras')
    }
  }


}
