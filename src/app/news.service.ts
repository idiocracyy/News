import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY ='58bc328f0b074b43b2c724bce8c6156b';
@Injectable({
  providedIn: 'root'
})

export class NewsService {
  date: Date;
  currentday: number;
  currentMonth: number;
  currentYear: string;
  currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(link){
    // this.date = new Date();
    // this.currentYear = this.date.getFullYear()+"";
    // this.currentMonth = this.date.getMonth()+1;
    // this.currentday = this.date.getDay();
    // console.log(this.currentYear+"-"+this.currentMonth+"-"+this.currentday);
    return this.http.get(link+'&apiKey='+API_KEY);
  }
}
