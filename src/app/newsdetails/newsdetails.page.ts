import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.page.html',
  styleUrls: ['./newsdetails.page.scss'],
})
export class NewsdetailsPage implements OnInit {
  article;
  constructor(private newsService: NewsService, private iab: InAppBrowser) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }

  openLink(url: any){
    this.iab.create(url, '_self');
  }
}
