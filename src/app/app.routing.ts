import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importación de componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget-pass/forget.component';
import { MetricasComponent } from './admin/components/metricas/metricas.component';
import { AdminModule } from './admin/admin.module';
import { TerminosUserComponent } from './admin/components/terminos-user/terminos-user.component';
import { cmovComponent } from './components/confirm-movil/cmov.component';

const appRoutes:Routes = [
	{path: '', component: LoginComponent},
	{path: 'cmov', component: cmovComponent},
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'forget', component: ForgetComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'admin-panel', component: AdminModule},
	{path: 'metricas', component: MetricasComponent},
	{path: 'terminos-user', component: TerminosUserComponent},
	{path: '**', component: LoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);