import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  navegarAlComponente(ComponenteId: string): void {
    const element = document.getElementById(ComponenteId);
    if (element) {
      element.scrollIntoView({ behavior:'smooth'});
    }
  }

}
