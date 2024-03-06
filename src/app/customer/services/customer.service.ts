import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserstorageService } from 'src/app/service/auth/storage/userstorage.service';

const BASIC_URL = "http://localhost:8080/";


@Injectable({
  providedIn: 'root'
})
export class CutomerService {

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/customer/products', {
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllProductsByName(name: any): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/customer/search/$(name)', {
      headers: this.createAuthorizationHeader(),
    })
  }





  addToCart(productId: any): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserstorageService.getUserId()
    }

    return this.http.post(BASIC_URL + '/api/customer/cart', cartDto, {
      headers: this.createAuthorizationHeader(),
    })
  }


  getCartByUserId(): Observable<any> {
    const userId = UserstorageService.getUserId()
    return this.http.get(BASIC_URL + `api/customer/cart/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }









  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserstorageService.getToken()
    )
  }







}
