import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../services/admin.guard';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ZonasZippComponent } from './components/zonas-zipp/zonas-zipp.component';
import { GananciasComponent } from './components/ganancias/ganancias.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HistorialComponent } from './components/historial/historial.component';
import { MetricasComponent } from './components/metricas/metricas.component';
import { TerminosUserComponent } from './components/terminos-user/terminos-user.component';
import { HelpUserComponent } from './components/help-user/help-user.component';
import { ZonaZippDetailComponent } from './components/zonazipp-detail/zonazipp-detail.component';

//Componentes administrar zonas ZIPP
import { MainZonasZippComponent } from './components/main-zonas-zipp/main-zonas-zipp.component';
import { ListZonasZippComponent } from './components/list-zonas-zipp/list-zonas-zipp.component';
import { AddZonasZippComponent } from './components/add-zonas-zipp/add-zonas-zipp.component';
import { EditZonasZippComponent } from './components/edit-zonas-zipp/edit-zonas-zipp.component';

const adminRoutes: Routes = [
	{
		path: 'admin-panel',
		component: DashboardComponent,
		canActivate: [AdminGuard],
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent },
			{ path: 'datos-user', component: UserEditComponent },
			{ path: 'zona-zipp', component: ZonasZippComponent },
			{ path: 'ganancias', component: GananciasComponent },
			{ path: 'compras', component: ComprasComponent },
			{ path: 'metricas', component: MetricasComponent },
			{ path: 'calificaciones', component: HistorialComponent },
			{ path: 'terminos-user', component: TerminosUserComponent },
			{ path: 'zonazipp-detail/:id', component: ZonaZippDetailComponent },
			{ path: 'help-user', component: HelpUserComponent },


			// Rutas de administracion de zonas zipp
			{
				path: 'admin-zonas-zipp',
				component: MainZonasZippComponent,
				children: [
					{ path: '', redirectTo: 'listado', pathMatch: 'full' },            
					{ path: 'list', component: ListZonasZippComponent },
					{ path: 'add', component: AddZonasZippComponent },
					{ path: 'edit/:id', component: EditZonasZippComponent },     
				]
			},
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AdminRoutingModule { }