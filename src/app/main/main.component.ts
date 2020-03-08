import { Component, OnInit, Injectable } from '@angular/core';
import { WeatherService } from '../weather.service';
import { NgStyle } from '@angular/common';
declare const apiCall: any;

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: WeatherService) { }

  
  morning : any;
  dusk : any;
  afternoon : any;
  evening : any;
  desktop : Boolean = false;
  night : any;

  night_flag : Boolean = false;
  morning_flag : Boolean = false;
  dayTimeFlag : Boolean = false;
  evening_flag : Boolean = false;

  ngOnInit() {

    this.detectDevice();

  
    var d = new Date();
    var n = d.getTime();

    console.log(n)
    console.log(this.service.timezone)

    console.log(this.service.sunrise)

    var dusk = new Date();
    dusk.setHours(24,59,59);
    this.dusk = dusk.getTime() 
    console.log ('Dusk: ' + this.dusk)
   

    var morning = new Date();
    morning.setHours(6,40,0)
    this.morning = morning.getTime() 
    console.log ('Morning: ' + this.morning)


    var afternoon = new Date();
    afternoon.setHours(12,45);  
   this.afternoon = afternoon.getTime() 
   console.log ('Afternoon: ' + this.afternoon)


    var evening = new Date();
    evening.setHours(18,0,0); // 6.00 pm
    this.evening = evening.getTime() 
    console.log ('Evening: ' + this.evening)


    var night = new Date();
    night.setHours(20,0,0); // 8.00 pm
    this.night = night.getTime() 
    console.log ('Night: ' + this.night)




    console.log(n)
    console.log(this.dusk)
    console.log(this.morning)

    if ( n  >= this.morning && n <= this.afternoon) {

      console.log("IT IS MORNING TIME")
      console.log('here')
      this.morning_flag = true;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = false;
    }


    if (n >= this.afternoon && n <= this.evening) {

      //day time (afternoon)
      console.log("IT IS DAY TIME")
      this.morning_flag = false;
      this.dayTimeFlag = true;
      this.evening_flag = false;
      this.night_flag = false;

    }
  
    if (n >= this.evening  && n< this.night) {

      console.log("IT IS EVENING TIME")
       this.morning_flag = false;
       this.dayTimeFlag = false;
       this.evening_flag = true;
       this.night_flag = false;
    } 

    if (n>= this.night && n < this.dusk) {

      console.log("IT IS NIGHT TIME")

      this.morning_flag = false;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = true;

      
    } 


    if (n <= this.dusk && n < this.morning) {

      console.log("IT IS STILL DUSK TIME")
  
      this.morning_flag = false;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = true;

      
    }


  }

  

  detectDevice() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      console.log(true)
       return true;
     }
    else {
      console.log(false)

        this.desktop = true;
       return false;
     }
   }

}