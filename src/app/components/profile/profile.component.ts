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
import { UsersService } from 'app/services/users-service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    data : Date = new Date();
    focus;
    focus1;

    isDesktopDevice: any;
    users: any[] = [];
    articles: any[] = [];
    getArticlesObservable: BehaviorSubject<any[]>;

    constructor(private usersService: UsersService,
               private router: Router,
               private deviceService: DeviceDetectorService,
               private modalService: NgbModal,
               private articlesService: ArticlesService,
               private sanitizer: DomSanitizer  ) {
this.getArticlesObservable = new BehaviorSubject<any[]>([]);
}

ngOnInit(): void {
  this.getArticles();
  this.isDesktopDevice = this.deviceService.isDesktop();
  var navbar = document.getElementsByTagName('nav')[0];
  navbar.classList.add('navbar-transparent');
  
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
})
}

logout(){
  sessionStorage.clear();
    this.router.navigateByUrl('/index');
}

}