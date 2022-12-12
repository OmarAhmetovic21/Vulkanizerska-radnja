import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'app/services/articles/articles.service';

@Component({
  selector: 'app-dodaj-ponudu',
  templateUrl: './dodaj-ponudu.component.html',
  styleUrls: ['./dodaj-ponudu.component.css']
})
export class DodajPonuduComponent implements OnInit {
  
  @Input()
  name: any;
  price: any;
  amount: any;
  media: any;

  constructor(public activeModal: NgbActiveModal,
              private articlesService: ArticlesService) { }

  ngOnInit(): void {

  }

  closeModal() {
    this.activeModal.close();
  }

  postArticle() {
    let data = {
      name: this.name,
      price: this.price,
      amount: this.amount,
      media: this.media
    }
    console.log(data)
    this.articlesService.postArticle(data).subscribe((data: any)=> {
      console.log("Uspješno ste dodali ponudu");
    } );
    this.activeModal.close();
  }

  
}