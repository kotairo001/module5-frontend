import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";
import {Diary} from "../model/Diary";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  private API_DIARY = environment.API_LOCAL + "diary"

  constructor(private httpClient: HttpClient) {
  }

  createDiaryService(diary: Diary): Observable<any> {
    return this.httpClient.post<any>(this.API_DIARY, diary)
  }

  getListDiary(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API_DIARY + "/all/" + id)
  }

  getDiaryById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API_DIARY + "/" + id);
  }

  getCategory(id: number): Observable<any> {
    return this.httpClient.get<any>(this.API_DIARY + "/list/" + id)
  }

  updateDiary(id: number, diary: Diary): Observable<any> {
    return this.httpClient.put<any>(this.API_DIARY + "/" + id, diary);
  }

  deleteDiary(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.API_DIARY + "/" + id)
  }

  getDiaryNumber(): Observable<any> {
    return this.httpClient.get<any>(this.API_DIARY + "/count")
  }
}

