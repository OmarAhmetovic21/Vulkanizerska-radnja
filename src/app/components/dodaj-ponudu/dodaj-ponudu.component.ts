import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'app/services/articles/articles.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-dodaj-ponudu',
  templateUrl: './dodaj-ponudu.component.html',
  styleUrls: ['./dodaj-ponudu.component.css']
})
export class DodajPonuduComponent implements OnInit {
  image!: Observable<any>
  base64code!: any
  
  @Input()
  name: any;
  price: any;
  amount: any;
  media: any;

  constructor(public activeModal: NgbActiveModal,
              private articlesService: ArticlesService) { }

  ngOnInit(): void {

  }

  onChange = ($event: Event)=>{
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file);

  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>)=>{
      this.readFile(file, subscriber)
    })
    observable.subscribe((d)=>{
      console.log(d)
      this.image = d;
      this.base64code = d;

    }
    )
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () =>{
      subscriber.next(filereader.result)
      subscriber.complete()
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }

  }

  closeModal() {
    this.activeModal.close();
  }

  postArticle() {
    let data = {
      name: this.name,
      price: this.price,
      amount: this.amount,
      media: this.image
    }
    console.log(data)
    this.articlesService.postArticle(data).subscribe((data: any)=> {
      console.log("Uspješno ste dodali ponudu");
    } );
    this.activeModal.close();
  }

  
}