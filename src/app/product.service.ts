import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'})
export class ProductService {

  // getProducts(): IProduct[] {}
  constructor(private _http: Http) {  }
}


