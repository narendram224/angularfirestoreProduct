import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { ProductFormComponent } from './products/product-form/product-form.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AngularFirestoreModule,AngularFireModule.initializeApp(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
