import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from 'app/services/articles/articles.service';

@Component({
  selector: 'app-obrisi-ponudu',
  templateUrl: './obrisi-ponudu.component.html',
  styleUrls: ['./obrisi-ponudu.component.css']
})
export class ObrisiPonuduComponent implements OnInit {
  @Input()
  name: any;
  

  constructor(public activeModal: NgbActiveModal,
              private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  deleteArticles(){
    let names ={
      name: this.name
    }
    this.articlesService.deleteArticle(names).subscribe((data: any) => {

    });
    this.activeModal.close();
  }

}
