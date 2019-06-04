import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  page: number = 1;
  
  constructor(private newsService: NewsService, private router: Router, private iab: InAppBrowser) { }
  
  ngOnInit() {
    this.newsService.getData('https://newsapi.org/v2/everything?q=sports&language=en&sortBy=publishedAt&pageSize=5&page='+this.page)
    .subscribe(data => {
      // console.log(data);
      this.data = data;
    }); 
  }
  
  
  onGoToNewsDetails(url){
    this.iab.create(url , '_self');
    // this.newsService.currentArticle = article;
    // this.router.navigate(['/newsdetails']);
  }
  
  LoadMoreNews(event){
    this.page += 1;
    this.newsService
    .getData('https://newsapi.org/v2/everything?q="sports"&language=en&sortBy=publishedAt&pageSize=5&page='+this.page)
    .subscribe(data => {
      for(const article of data['articles']){
        this.data.articles.push(article);
      }
      event.target.complete(this.data);
    }); 
  }
  
  
  doRefresh(event) {
    console.log('Begin async operation');
    
    setTimeout(() => {
      this.newsService.getData('https://newsapi.org/v2/everything?q=sports&language=en&sortBy=publishedAt&pageSize=5&page=1')
      .subscribe(data => {
        // console.log(data);
        this.data = data;
      }); 
      this.page = 1;
      event.target.complete();
    }, 2000);
  }
}

