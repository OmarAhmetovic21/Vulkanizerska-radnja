import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {
  isDesktopDevice: any;
  constructor(private router: Router,
              private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}


}
