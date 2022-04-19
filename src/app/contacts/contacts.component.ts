import { Mail } from './../Model/Mail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  mail: Mail = new Mail();

  constructor() { }

  ngOnInit(){

    window.scroll(0,0)

  }

  send(){

    alert("Você será redimencionado para a conta do gmail.")

  }

}
