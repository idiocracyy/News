import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  page: number = 1;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('https://newsapi.org/v2/everything?q=sports&language=en&sortBy=publishedAt&pageSize=5&page='+this.page)
    .subscribe(data => {
      // console.log(data);
      this.data = data;
    }); 
  }
  
  
  onGoToNewsDetails(article){
    this.newsService.currentArticle = article;
    this.router.navigate(['/newsdetails']);
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
}

