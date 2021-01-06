import { Component, OnInit, Input } from '@angular/core';
import { cupones } from '../../assets/coupons';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  @Input() imgInput: string|null = "";
  @Input() textInput: string|null = "";
  @Input() modalInput: string|null= "";
  thecoupons = cupones;
  constructor() { }

  ngOnInit(): void {
  }

}
