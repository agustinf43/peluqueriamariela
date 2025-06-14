import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpreciosComponent } from './adminprecios.component';

describe('AdminpreciosComponent', () => {
  let component: AdminpreciosComponent;
  let fixture: ComponentFixture<AdminpreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminpreciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
