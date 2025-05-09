import { Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { LoginGuardianService } from './servicios/login-guardian.service';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ProductosCatalogoComponent } from './componentes/productos-catalogo/productos-catalogo.component';
import { ConocenosComponent } from './componentes/conocenos/conocenos.component';
import { ArtesanosComponent } from './componentes/artesanos/artesanos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';

import { AtzompaInfoComponent } from './componentes/atzompa-info/atzompa-info.component';
import { CoyotepecInfoComponent } from './componentes/coyotepec-info/coyotepec-info.component';
import { TlapazolaInfoComponent } from './componentes/tlapazola-info/tlapazola-info.component';

export const routes: Routes = [
    {path: '', component: TableroComponent}, // Ruta principal que carga el componente TableroComponent
    {path: 'login', component: LoginComponent},
    {path: 'registrarse', component: RegistroComponent},
    {path: 'productos', component: ProductosCatalogoComponent},
    {path: 'nosotros', component: ConocenosComponent},
    {path: 'carrito', component: CarritoComponent, canActivate: [LoginGuardianService]},
    {path: 'artesanos', component: ArtesanosComponent},
    {path: 'agregar_producto', component: AgregarProductoComponent, canActivate: [LoginGuardianService]},
    {path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [LoginGuardianService]},
    {path: 'pueblos/atzompa', component: AtzompaInfoComponent},
    {path: 'pueblos/coyotepec', component: CoyotepecInfoComponent},
    {path: 'pueblos/tlapazola', component: TlapazolaInfoComponent},
    {path: '**', component: NoEncontradoComponent} // Redirige a la página principal si la ruta no coincide con ninguna definida
];
