import { Component, OnInit, Input } from '@angular/core';
import { cupones } from '../../assets/coupons'

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  @Input() textInput: string|null = "";
  bole: boolean = false;
  thecoupons = cupones;

  constructor() { }

  ngOnInit(): void {
  }

}
