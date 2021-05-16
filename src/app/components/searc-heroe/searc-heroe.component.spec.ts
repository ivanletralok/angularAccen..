import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcHeroeComponent } from './searc-heroe.component';

describe('SearcHeroeComponent', () => {
  let component: SearcHeroeComponent;
  let fixture: ComponentFixture<SearcHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearcHeroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
