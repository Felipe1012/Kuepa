import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading

  private URL = 'http://localhost:3000/api/';

  txt
  textModelo
  nl
  public texto: any[] = [];


  public form = {
    input_data: [{
      values: [[]]
    }]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
