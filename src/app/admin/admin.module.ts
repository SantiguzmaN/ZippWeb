//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

//Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FooterComponent } from './components/footer/footer.component';
import { MetricasComponent } from './components/metricas/metricas.component';
import { ZonasZippComponent } from './components/zonas-zipp/zonas-zipp.component';
import { GananciasComponent } from './components/ganancias/ganancias.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HistorialComponent } from './components/historial/historial.component';
import { TerminosUserComponent } from './components/terminos-user/terminos-user.component';
import { HelpUserComponent } from './components/help-user/help-user.component';
import { ZonaZippDetailComponent } from './components/zonazipp-detail/zonazipp-detail.component';

//Componentes de administracion de zonas ZIPP
import { MainZonasZippComponent } from './components/main-zonas-zipp/main-zonas-zipp.component';
import { ListZonasZippComponent } from './components/list-zonas-zipp/list-zonas-zipp.component';
import { AddZonasZippComponent } from './components/add-zonas-zipp/add-zonas-zipp.component';
import { EditZonasZippComponent } from './components/edit-zonas-zipp/edit-zonas-zipp.component';

//Guards
import { AdminGuard } from '../services/admin.guard';
import { UserService } from '../services/user.service';
import { SearchPipe } from './pipes/search.pipe';

//Import Angular Google Maps
import { AgmCoreModule } from '@agm/core';



@NgModule({
	declarations: [
		SearchPipe,
		DashboardComponent,
		HomeComponent,
		UserEditComponent,
		FooterComponent,
		ZonasZippComponent,
		GananciasComponent,
		ComprasComponent,
		MetricasComponent,
		HistorialComponent,
		TerminosUserComponent,
		HelpUserComponent,
		MainZonasZippComponent,
		ListZonasZippComponent,
		AddZonasZippComponent,
		EditZonasZippComponent,
		ZonaZippDetailComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule,
		AdminRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDEYJ2dg0n9SyCJZsgYTv3foFxfto_zxWk',
			libraries: ['places']
		})
	],
	exports: [
		DashboardComponent,
		HomeComponent,
		UserEditComponent,
		ZonasZippComponent,
		GananciasComponent,
		ComprasComponent,
		HistorialComponent,
		TerminosUserComponent,
		HelpUserComponent,
		MetricasComponent,
		MainZonasZippComponent,
		ListZonasZippComponent,
		AddZonasZippComponent,
		EditZonasZippComponent
	],
	providers: [
		AdminGuard, 
		UserService
	]
})

export class AdminModule { }