import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Products } from '../model/products.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ProductCollection:AngularFirestoreCollection;
  Products:Observable<Products[]>;
  productDoc;
  constructor(private db:AngularFirestore) {
      this.Products  = this.db.collection('products').valueChanges();
      this.ProductCollection = this.db.collection('products');

      this.Products = this.ProductCollection.snapshotChanges().pipe(map(serverData=>{
           return serverData.map(a=>{
             const data= a.payload.doc.data() as Products;
             data.id = a.payload.doc.id;
             return data;
            })
      }))
   }

   getProducts(){
     return this.Products;
   }
}
