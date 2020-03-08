import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weather_data : any;
  location : any;
  region: any;
  condition_now : any;
  temperature_now : any;

  long : any;
  lat : any

  flag : Boolean = false;
  flag2 : Boolean = false;
  

  @Input() city : any;

  constructor(private service : WeatherService, private main : MainComponent) { }

  ngOnInit() {

    this.getPosition();
    
  }

  

  convertToFahrenheit(temperature, event){

   
  
    console.log('clicked!')
    if(this.flag2 == true){
      console.log('this code ran in Cel')
      event.target.disabled = true;
      this.flag = true;
      this.convertToCelsius(temperature, event)
    }
    
    this.service.convertToFahrenheit(temperature);

    if(this.flag){
      event.target.disabled = false;

    }
    
  }

  convertToCelsius(temperature, event){


    event.target.disabled = false;
    console.log('you clicked fahrenheit')
    this.flag2 = true;

    if(this.flag){
      event.target.disabled = false;

    }


    this.service.convertToCelsius(temperature);

  }



  makeApiCall(city) {

    console.log(city)

    console.log("called me")

    this.weather_data = this.service.apiCall(this.city)

    this.city = "";


  }
  
  
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          console.log(position)
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
           this.service.apiCallLongLat(this.long,this.lat)
        }
        },
        err => {
          reject(err);
        });
    });

  }
}
