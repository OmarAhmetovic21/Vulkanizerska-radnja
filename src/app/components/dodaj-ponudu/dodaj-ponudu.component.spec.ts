import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPonuduComponent } from './dodaj-ponudu.component';

describe('DodajPonuduComponent', () => {
  let component: DodajPonuduComponent;
  let fixture: ComponentFixture<DodajPonuduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajPonuduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPonuduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
