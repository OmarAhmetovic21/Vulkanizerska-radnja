import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-ponudu',
  templateUrl: './dodaj-ponudu.component.html',
  styleUrls: ['./dodaj-ponudu.component.css']
})
export class DodajPonuduComponent implements OnInit {

  ponudaFormGroup:FormGroup;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  closeModal() {
    this.activeModal.close();
  }

}
