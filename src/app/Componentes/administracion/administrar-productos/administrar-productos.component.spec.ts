import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarProductosComponent } from './administrar-productos.component';

describe('AdministrarProductosComponent', () => {
  let component: AdministrarProductosComponent;
  let fixture: ComponentFixture<AdministrarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
