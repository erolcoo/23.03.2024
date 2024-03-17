import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SportCarsComponent } from './sport-cars/sport-cars.component';
import { SuvCarsComponent } from './suv-cars/suv-cars.component';
import { HybridCarsComponent } from './hybrid-cars/hybrid-cars.component';
import { SpecificationComponent } from './specification/specification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { RedirectSportsCarComponent } from './redirect-sports-car/redirect-sports-car.component';
import { RedirectSuvCarComponent } from './redirect-suv-car/redirect-suv-car.component';
import { RedirectHybridCarComponent } from './redirect-hybrid-car/redirect-hybrid-car.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome-page' },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sport-cars', component: SportCarsComponent },
  { path: 'suv-cars', component: SuvCarsComponent },
  { path: 'hybrid-cars', component: HybridCarsComponent },
  { path: 'specification', component: SpecificationComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: WelcomePageComponent },
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: 'redirect-sports-car', component: RedirectSportsCarComponent },
  { path: 'redirect-suv-cars', component: RedirectSuvCarComponent },
  { path: 'redirect-hybrid-cars', component: RedirectHybridCarComponent },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
