import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/@core/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap();
    this.map.load_parkings();
  }

}
