
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module'; // custom material module
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import 'hammerjs';
import { RegistrationComponent } from './registration/registration.component';
// services
import { ProdService } from './products/prod.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule, // custom material module
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
