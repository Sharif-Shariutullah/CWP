import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserstorageService } from 'src/app/service/auth/storage/userstorage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }



  addCategory(categoryDto: any): Observable<any> {
    console.log('-------',categoryDto);
    
    return this.http.post(BASIC_URL + 'api/admin/category?name='+ categoryDto.name+"&description=" + categoryDto.description,{})
  }



 getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + 'api/admin', {
      headers: this.createAuthorizationHeader(),
    })
  }


  addProduct(productDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/products', productDto, {
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/products', {
      headers: this.createAuthorizationHeader(),
    })
  }


  getAllProductsByName(name : any): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/products/search/$(name)', {
      headers: this.createAuthorizationHeader(),
    })
  }





deleteProduct(productId: any): Observable<any> {
    return this.http.post(BASIC_URL + `api/admin/product/${productId}`,  {
      headers: this.createAuthorizationHeader(),
    })
  }


  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserstorageService.getToken()
    )
  }


}
