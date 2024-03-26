import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportCarsComponent } from './cars-module/sport-cars/sport-cars.component';
import { SuvCarsComponent } from './cars-module/suv-cars/suv-cars.component';
import { HybridCarsComponent } from './cars-module/hybrid-cars/hybrid-cars.component';
import { SpecificationComponent } from './cars-module/specification/specification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './user-module/login/login.component';
import { RegisterComponent } from './user-module/register/register.component';
import { LogoutComponent } from './user-module/logout/logout.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SharedModule } from './shared/shared.module';
import { DeleteAccountComponent } from './user-module/delete-account/delete-account.component';
import { UpdateclientComponent } from './user-module/updateclient/updateclient.component';
import { SellCarComponent } from './cars-module/sell-car/sell-car.component';
import { YourCarComponent } from './cars-module/your-car/your-car.component';
import { DeleteWindowConfirmComponent } from './user-module/delete-window-confirm/delete-window-confirm.component';
import { UserModuleModule } from './user-module/user-module.module';
import { CarsModuleModule } from './cars-module/cars-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SportCarsComponent,
    SuvCarsComponent,
    HybridCarsComponent,
    SpecificationComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    WelcomePageComponent,
    DeleteAccountComponent,
    UpdateclientComponent,
    SellCarComponent,
    YourCarComponent,
    DeleteWindowConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModuleModule,
    CarsModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
