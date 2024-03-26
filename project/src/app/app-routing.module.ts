import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SportCarsComponent } from './cars-module/sport-cars/sport-cars.component';
import { SuvCarsComponent } from './cars-module/suv-cars/suv-cars.component';
import { HybridCarsComponent } from './cars-module/hybrid-cars/hybrid-cars.component';
import { SpecificationComponent } from './cars-module/specification/specification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-module/login/login.component';
import { RegisterComponent } from './user-module/register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DeleteAccountComponent } from './user-module/delete-account/delete-account.component';
import { UpdateclientComponent } from './user-module/updateclient/updateclient.component';
import { SellCarComponent } from './cars-module/sell-car/sell-car.component';
import { YourCarComponent } from './cars-module/your-car/your-car.component';
import { LogoutComponent } from './user-module/logout/logout.component';
import { DeleteWindowConfirmComponent } from './user-module/delete-window-confirm/delete-window-confirm.component';

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
  { path: 'logout', component: LogoutComponent },
  { path: 'delete-account', component: DeleteWindowConfirmComponent },
  { path: 'updateclient', component: UpdateclientComponent },
  {path: 'sell-car' , component: SellCarComponent },
  {path: 'your-car', component: YourCarComponent},
  {path:'delete-window-confirm', component: DeleteAccountComponent}

];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
