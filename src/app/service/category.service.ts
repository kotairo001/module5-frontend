import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY = environment.API_LOCAL + 'category'

  constructor(private httpClient: HttpClient) {
  }

  createCategoryService(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_CATEGORY, category)
  }

  getListCategory(): Observable<any> {
    return this.httpClient.get<any>(this.API_CATEGORY)
  }

  getCategoryById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API_CATEGORY + "/" + id);
  }

  updateCategory(id: number, category: Category): Observable<any> {
    return this.httpClient.put<any>(this.API_CATEGORY + "/" + id, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.API_CATEGORY + "/" + id);
  }
}
