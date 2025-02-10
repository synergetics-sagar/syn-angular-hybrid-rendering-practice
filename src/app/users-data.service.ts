import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from './globals';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {


  url = apiUrl

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  getUserProfile(id: number){
    return this.http.get(`${this.url}/${id}`)
  }
}
