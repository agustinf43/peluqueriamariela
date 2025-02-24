import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactowhatsapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactowhatsapp.component.html',
  styleUrl: './contactowhatsapp.component.css'
})
export class ContactowhatsappComponent {

  wspbtn=[
    {
      imgUrl:"../../../assets/img/iconos/whatsapp-100-.png",
      imgAlt:"Envia un mensaje a mi WhatsApp",
      imgTitle:"Envia un mensaje a mi WhatsApp"
    }


  ]

  






}
