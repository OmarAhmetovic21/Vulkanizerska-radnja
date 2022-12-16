import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisiPonuduComponent } from './obrisi-ponudu.component';

describe('ObrisiPonuduComponent', () => {
  let component: ObrisiPonuduComponent;
  let fixture: ComponentFixture<ObrisiPonuduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrisiPonuduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrisiPonuduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
