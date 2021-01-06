import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  marker: any[] = [];
  mapbox = (mapboxgl as typeof mapboxgl);
  map: any = "";
  style = `mapbox://styles/mapbox/streets-v11`;
  lat = 40.4180992;
  lng =  -3.7012341;
  zoom = 15;
  constructor() { 
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  get_parkings = () => {
    return new Promise((resolve, reject) => {
                $.ajax({
                    url: "https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json",
                    method: "GET"
                }). done((data:any) => {
                  resolve(data);
                }).fail(() => {
                    reject("Problema al cargar los marcadores")
                })
    })
}
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      }));
    }
   crearmarkers(data: any) {
      const item = data["@graph"];
      for(let i = 0; i < item.length; i++) {
          const textopop = item[i].title ;
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(textopop);           
          const location = item[i].location;
          const mark = new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .setPopup(popup)
          .addTo(this.map);
          this.marker.push(mark);
      }; 
  }
  async  load_parkings() {
    try{
       const losdatos = await this.get_parkings();
       this.crearmarkers(losdatos)       
    }
    catch(e) {
        console.log("Error: ", e); 
    } 
}
  
}
