import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeColumnComponent } from './age-column.component';

describe('AgeColumnComponent', () => {
  let component: AgeColumnComponent;
  let fixture: ComponentFixture<AgeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
