import { Injectable } from '@angular/core';
import { Product_table } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
baseApiUrl:string='https://localhost:7024';
insertdata(prddetails:Product_table){
  return this.http.post<Product_table>(this.baseApiUrl+'/api/Product_table',prddetails);//Product_table is our backend controller name.
}
viewdata() {
  return this.http.get<Product_table>(this.baseApiUrl+'/api/Product_table');
}

}
