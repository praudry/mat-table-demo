import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTableComponent } from './m-table.component';

describe('MTableComponent', () => {
  let component: MTableComponent;
  let fixture: ComponentFixture<MTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
