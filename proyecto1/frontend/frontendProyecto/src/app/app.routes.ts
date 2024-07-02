import { Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {IngresoComponent} from "./pages/ingreso/ingreso.component";
import {InicioComponent} from "./pages/inicio/inicio.component";
import {ProductosComponent} from "./pages/productos/productos.component";
import { NoEncontradoComponentComponent } from './pages/no-encontrado-component/no-encontrado-component.component';

export const routes: Routes = [  

    {path: 'inicio', component: InicioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'ingreso', component: IngresoComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: NoEncontradoComponentComponent},
   

];
