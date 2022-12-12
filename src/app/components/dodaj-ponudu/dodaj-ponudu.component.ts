import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'app/services/articles/articles.service';

@Component({
  selector: 'app-dodaj-ponudu',
  templateUrl: './dodaj-ponudu.component.html',
  styleUrls: ['./dodaj-ponudu.component.css']
})
export class DodajPonuduComponent implements OnInit {

  ponudaFormGroup:FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private articlesService: ArticlesService) { }

  ngOnInit(): void {

  }

  closeModal() {
    this.activeModal.close();
  }

  

}
