import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  open(page: any) {
    this.router.navigateByUrl('/' + page);
}


}
