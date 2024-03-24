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
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { YourCarComponent } from './your-car/your-car.component';
import { LogoutComponent } from './logout/logout.component';

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
  { path: 'delete-account', component: DeleteAccountComponent },
  { path: 'updateclient', component: UpdateclientComponent },
  {path: 'sell-car' , component: SellCarComponent },
  {path: 'your-car', component: YourCarComponent}
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
