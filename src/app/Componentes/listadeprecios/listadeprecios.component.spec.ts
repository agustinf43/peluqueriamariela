import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepreciosComponent } from './listadeprecios.component';

describe('ListadepreciosComponent', () => {
  let component: ListadepreciosComponent;
  let fixture: ComponentFixture<ListadepreciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadepreciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadepreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
