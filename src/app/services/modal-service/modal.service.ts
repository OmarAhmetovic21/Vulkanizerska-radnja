import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DodajPonuduComponent } from 'app/components/dodaj-ponudu/dodaj-ponudu.component'; 
import { ObrisiPonuduComponent } from 'app/components/obrisi-ponudu/obrisi-ponudu.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public openDodajPonudu(){
    const modalRef = this.modalService.open(DodajPonuduComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
  }

  public openObrisiPonudu(){
    const modalRef = this.modalService.open(ObrisiPonuduComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
      });
  }
}

