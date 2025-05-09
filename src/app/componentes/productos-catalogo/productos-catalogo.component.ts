import { Component, ElementRef, ViewChild } from '@angular/core';
import { Producto } from '../../modelo/producto.model';
import { ProductoService } from '../../servicios/producto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-producto-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './productos-catalogo.component.html',
  styleUrls: ['./productos-catalogo.component.css']
})
export class ProductosCatalogoComponent {
  productos: Producto[] | null = null;
  producto: Producto = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  @ViewChild('botonCerrar') botonCerrar!: ElementRef;

  constructor(
    private productoServicio: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit() {
    this.cargarProductos();
  
    // Escucha cambios de productos desde el servicio
    this.productoServicio.productosActualizados$.subscribe(() => {
      this.cargarProductos(); // Recargar productos al actualizar stock
    });
  }
  private cargarProductos() {
    this.productoServicio.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  // Agregar producto al carrito
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }

  // Agregar un producto nuevo
  agregarProducto(productoForm: NgForm) {
    const { value, valid } = productoForm;
    if (valid) {
      this.productoServicio.agregarProducto(value).then(() => {
        productoForm.resetForm();
        this.cerrarModal();
      });
    }
  }

  // Eliminar un producto
  eliminarProducto(id: string) {
    this.productoServicio.eliminarProducto(id);
  }

  // Cerrar modal
  private cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
}
