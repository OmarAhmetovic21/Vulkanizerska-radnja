import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';
import * as Rellax from 'rellax';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticlesService } from 'app/services/articles/articles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DodajPonuduComponent } from '../dodaj-ponudu/dodaj-ponudu.component';
import { ObrisiPonuduComponent } from '../obrisi-ponudu/obrisi-ponudu.component';

@Component({
  selector: 'app-ponude',
  templateUrl: './ponude.component.html',
  styleUrls: ['./ponude.component.css'],
  providers: [ArticlesService]
})
export class PonudeComponent implements OnInit {
  @Input()
  id: any;

  isDesktopDevice: any;
  articles: any[] = [];
  getArticlesObservable: BehaviorSubject<any[]>;
  constructor(private router: Router,
              private deviceService: DeviceDetectorService,
              private modalService: NgbModal,
              private articlesService: ArticlesService,
              private sanitizer: DomSanitizer) { 

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

openDodajPonudu(){
  const modalRef = this.modalService.open(DodajPonuduComponent,
    {
      scrollable: true,
      windowClass: 'myCustomModalClass',
    });
}

openObrisiPonudu(){
  const modalRef = this.modalService.open(ObrisiPonuduComponent,
    {
      scrollable: true,
      windowClass: 'myCustomModalClass',
    });
}

getArticles() {
  this.articlesService.getArticles().subscribe((data: any) => {
    // resp.json().data
    this.getArticlesObservable.next(data);
    console.log(data);
    for (var index in data) {
      console.log(data[index].media);
      console.log(data[index].id);
    }
  })
}

}
