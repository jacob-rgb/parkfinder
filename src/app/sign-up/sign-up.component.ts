import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  password1:any = "";

  password2:any = "";

  contam: any = "40";

  tabPrecios: any = [];
  
  constructor() { }

  ngOnInit(): void {
    this.precios()
  }
   precios() {
    let desc = 0;
    for (let i = 0; i < 11; i++ ) {
        const precio = 50;
        const percent = (desc * precio) / 100;
        const preciofinal = precio - percent;
        const obj = {descu: desc, precio: preciofinal}
        this.tabPrecios.push(obj)
        desc = desc + 5; 
    }
  } 
}
