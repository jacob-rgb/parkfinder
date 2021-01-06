import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  bole: boolean = false;

   user:string[][] = [
         ["Name", "Jacobo"],
         ["Surname", "Ramírez Rivera"],
         ["Email", "jacorr@gmail.com"],
         ["Password", "neoland"],
         ["DNI", "53997125G"],
         ["BirthDate", "07/02/1995"],
         ["CarPlate", "6774-FXS"],
         ["EnvironmentClass", "B"]
   ]

;

  constructor() { }

  ngOnInit(): void {
    
  }

}
