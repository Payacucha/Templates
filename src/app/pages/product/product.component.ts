import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  // Inyeccion de dependencias, similar a intanciar un objeto
  constructor(private httpClient: HttpClient) { }

  // Método NgOnInit similar al constructor, se ejecuta despues del constructor
  ngOnInit() {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    this.updateProduct();
    // this.deleteProduct();
  }

  // Obtener todos los productos
  getProducts() {
    // Petición del API y esperando una respuesta
    // Para traer la data desde el backend
    // Suscribe para promesas y observables
    // Se recibe una petición y se asigna una respuesta
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Obtener un producto
  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/262';
    this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      });
  }

  // Crear nuevo producto
  createProduct() {
    const data = {
      title: "Shoes Adidas Samba",
      price: 152.99,
      description: "zapatos/David Quiroga",
      categoryId: 2,
      images: ["https://picsum.photos/640/640?r=4213", "https://picsum.photos/640/640?r=7623", "https://picsum.photos/640/640?r=9048"]
    }

    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Actualizar producto
  updateProduct() {
    const data = {
      tittle: "Nike",
      price: 135.99,
      description: "Tenis/David Quiroga",
    }

    const url = 'https://api.escuelajs.co/api/v1/products/262';
    this.httpClient.put(url, data).subscribe(
      response => {
        console.log(response);
      });
  }

  // Eliminar producto
  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/262';
    this.httpClient.delete(url).subscribe(
      response => {
        console.log(response);
      });
  }

}
