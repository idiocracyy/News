import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58bc328f0b074b43b2c724bce8c6156b');
  }
}
