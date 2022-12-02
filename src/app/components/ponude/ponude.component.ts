import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';
import * as Rellax from 'rellax';
import { ArticlesService } from 'app/services/articles/articles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ponude',
  templateUrl: './ponude.component.html',
  styleUrls: ['./ponude.component.css'],
  providers: [ArticlesService]
})
export class PonudeComponent implements OnInit {
  isDesktopDevice: any;
  articles: any[] = [];
  getArticlesObservable: BehaviorSubject<any[]>;
  constructor(private router: Router,
              private deviceService: DeviceDetectorService,
              private modalService: NgbModal,
              private articlesService: ArticlesService) { 

            this.getArticlesObservable = new BehaviorSubject<any[]>([]);
  }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.getArticles();
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
    
}

getArticles() {
  this.articlesService.getArticles().subscribe((data: any) => {
    // resp.json().data
    this.getArticlesObservable.next(data);
    console.log(data);
  })
}

}
