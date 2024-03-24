import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModelGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SportCarsComponent } from './sport-cars/sport-cars.component';
import { SuvCarsComponent } from './suv-cars/suv-cars.component';
import { HybridCarsComponent } from './hybrid-cars/hybrid-cars.component';
import { SpecificationComponent } from './specification/specification.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SharedModule } from './shared/shared.module';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { YourCarComponent } from './your-car/your-car.component';
import { DeleteWindowConfirmComponent } from './delete-window-confirm/delete-window-confirm.component';



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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
