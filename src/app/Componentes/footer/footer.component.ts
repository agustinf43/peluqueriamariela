import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,],
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
