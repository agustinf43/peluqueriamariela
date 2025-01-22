import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactowhatsappComponent } from './contactowhatsapp.component';

describe('ContactowhatsappComponent', () => {
  let component: ContactowhatsappComponent;
  let fixture: ComponentFixture<ContactowhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactowhatsappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactowhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
