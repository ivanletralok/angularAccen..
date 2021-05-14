import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTableComponent } from './heroe-table.component';

describe('HeroeTableComponent', () => {
  let component: HeroeTableComponent;
  let fixture: ComponentFixture<HeroeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
