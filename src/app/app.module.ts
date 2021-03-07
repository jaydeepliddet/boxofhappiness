import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChocolatesComponent } from './chocolates/chocolates.component';
import { FooterComponent } from './footer/footer.component';
import { NewlaunchComponent } from './newlaunch/newlaunch.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChocolatesComponent,
    FooterComponent,
    NewlaunchComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
