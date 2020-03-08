import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  data : any;
  region : any;
  condition_now: any;
  temperature_now : any;
  current_location : any;
  location : any;
  current_observation_temperature : any;
  current_condition : any;
  current_condition_low : any;
  current_condition_high : any;
  data_received : Boolean = false;
  sunrise : any;
  sunset : any;
  low : any;
  high : any;

  day_one_high : any;
  day_two_high : any;
  day_three_high: any;
  day_four_high : any;
  day_five_high: any;
  day_six_high : any;
  day_seven_high: any;


  day_one_low : any;
  day_two_low : any;
  day_three_low: any;
  day_four_low : any;
  day_five_low: any;
  day_six_low : any;
  day_seven_low: any;
  clicked : Boolean = false;
  clicked_Celsius : Boolean = false
  timezone : any;
  
  morning_flag = false;
dayTimeFlag = false;
evening_flag = true;
night_flag = false;

dusk : any;
morning : any;
afternoon : any;
evening : any;
night : any;

 // uri = "http://localhost:5000"
  uri = "https://philweather.herokuapp.com"

  constructor(private https : HttpClient) { }


  apiCall(city){

    console.log(city)

      this.https.post(this.uri + '/phil', { city })
        .subscribe((response: any) => {

          this.data = JSON.parse(response.city_data);
          
        //  return this.data

          console.log(this.data)

          // On city search, update the GeoLocation to be overwritten by searched city

          this.current_location = this.data;

          this.current_observation_temperature = this.current_location.current_observation.condition.temperature
          this.current_condition = this.current_location.current_observation.condition.text
          this.current_condition_low = this.current_location.forecasts[0].low
          this.current_condition_high = this.current_location.forecasts[0].high 
          console.log(this.current_condition)
          console.log(this.current_condition_high)
          this.current_condition_low = this.current_location.forecasts[0].low
          this.current_condition_high = this.current_location.forecasts[0].high
          console.log(this.current_condition_low)
          console.log(this.current_condition_high)
  
          this.day_two_high = this.current_location.forecasts[1].high;
          this.day_three_high = this.current_location.forecasts[2].high 
          this.day_four_high = this.current_location.forecasts[3].high
          this.day_five_high = this.current_location.forecasts[4].high
          this.day_six_high = this.current_location.forecasts[5].high
          this.day_seven_high = this.current_location.forecasts[6].high
  
          this.day_two_low = this.current_location.forecasts[1].low
          this.day_three_low = this.current_location.forecasts[2].low
          this.day_four_low = this.current_location.forecasts[3].low
          this.day_five_low = this.current_location.forecasts[4].low
          this.day_six_low = this.current_location.forecasts[5].low
          this.day_seven_low = this.current_location.forecasts[6].low
          this.data_received = true;

   

          this.sunset = this.current_location.current_observation.astronomy.sunset.substring(0,7)
        //  console.log(this.convertTo24Hour(this.sunset))

          this.timezone = this.current_location.location.timezone_id
          console.log(this.timezone)
  
      
          this.getLocalTime( this.timezone);

        })

}

convertToFahrenheit(temperature){

  // (°F − 32) x 5/9


  console.log(this.current_observation_temperature)
  

  this.current_observation_temperature =  Math.round((this.current_observation_temperature - 32 ) * 5/9)

  for(let i = 0 ; i < this.current_location.forecasts.length ; i++ ){

   
    this.current_condition_high = Math.round((this.current_location.forecasts[0].high -32 ) * 5/9)

    this.current_condition_low = Math.round((this.current_location.forecasts[0].low -32 ) * 5/9)




   this.day_two_high = Math.round((this.current_location.forecasts[1].high -32 ) * 5/9)
   this.day_three_high = Math.round((this.current_location.forecasts[2].high -32 ) * 5/9)
   this.day_four_high = Math.round((this.current_location.forecasts[3].high -32 ) * 5/9)
   this.day_five_high = Math.round((this.current_location.forecasts[4].high -32 ) * 5/9)
   this.day_six_high = Math.round((this.current_location.forecasts[5].high -32 ) * 5/9)
   this.day_seven_high = Math.round((this.current_location.forecasts[6].high -32 ) * 5/9)

   this.day_two_low = Math.round((this.current_location.forecasts[1].low -32 ) * 5/9)
   this.day_three_low = Math.round((this.current_location.forecasts[2].low -32 ) * 5/9)
   this.day_four_low = Math.round((this.current_location.forecasts[3].low -32 ) * 5/9)
   this.day_five_low = Math.round((this.current_location.forecasts[4].low -32 ) * 5/9)
   this.day_six_low = Math.round((this.current_location.forecasts[5].low -32 ) * 5/9)
   this.day_seven_low = Math.round((this.current_location.forecasts[6].low -32 ) * 5/9)
  


  }
  


 }


 convertToCelsius(temperature){

  // (0°C × 9/5) + 32
  
  console.log("clicked me")
  this.current_observation_temperature = (this.current_location.current_observation.condition.temperature)


  this.current_condition_low = this.current_location.forecasts[0].low
  this.current_condition_high = this.current_location.forecasts[0].high 

 this.day_two_high = this.current_location.forecasts[1].high
 this.day_three_high = this.current_location.forecasts[2].high
 this.day_four_high = this.current_location.forecasts[3].high 
 this.day_five_high = this.current_location.forecasts[4].high
 this.day_six_high = this.current_location.forecasts[5].high
 this.day_seven_high = this.current_location.forecasts[6].high

 this.day_two_low = this.current_location.forecasts[1].low 
 this.day_three_low = this.current_location.forecasts[2].low 
 this.day_four_low = this.current_location.forecasts[3].low 
 this.day_five_low = this.current_location.forecasts[4].low 
 this.day_six_low = this.current_location.forecasts[5].low 
 this.day_seven_low = this.current_location.forecasts[6].low 

  if(this.clicked_Celsius = true){

    this.clicked = false

  } 
 


 }









apiCallLongLat(long, lat){

  console.log(long)
  console.log(lat)
  this.data_received = false;
    this.https.post(this.uri + '/get_current_location', { long, lat })
      .subscribe((response: any) => {

        this.current_location = JSON.parse(response.current_location);
        this.current_observation_temperature = this.current_location.current_observation.condition.temperature
        this.current_condition = this.current_location.current_observation.condition.text

        console.log(this.current_location)
        console.log(this.current_observation_temperature)

        this.current_condition_low = this.current_location.forecasts[0].low
        this.current_condition_high = this.current_location.forecasts[0].high
        console.log(this.current_condition_low)
        console.log(this.current_condition_high)

        this.day_two_high = this.current_location.forecasts[1].high;
        this.day_three_high = this.current_location.forecasts[2].high 
        this.day_four_high = this.current_location.forecasts[3].high
        this.day_five_high = this.current_location.forecasts[4].high
        this.day_six_high = this.current_location.forecasts[5].high
        this.day_seven_high = this.current_location.forecasts[6].high

        this.day_two_low = this.current_location.forecasts[1].low
        this.day_three_low = this.current_location.forecasts[2].low
        this.day_four_low = this.current_location.forecasts[3].low
        this.day_five_low = this.current_location.forecasts[4].low
        this.day_six_low = this.current_location.forecasts[5].low
        this.day_seven_low = this.current_location.forecasts[6].low


        this.sunrise = this.current_location.current_observation.astronomy.sunrise.substring(0,4)
        this.sunrise = this.sunrise + ':00'

        this.sunset = this.current_location.current_observation.astronomy.sunset.substring(0,7)
       // console.log(this.convertTo24Hour(this.sunset))
      //  return this.data
        this.timezone = this.current_location.location.timezone_id
        console.log(this.timezone)

      this.data_received = true;
      this.getLocalTime( this.timezone);

      })


}


getLocalTime(timezone){

  timezone = this.timezone
  this.https.post(this.uri + '/get_local_time', { timezone })
  .subscribe((response: any) => {

    this.timezone = JSON.parse(response.timezone)
    console.log(this.timezone)
    this.timezone = this.timezone.datetime.substring(11,16)
    console.log(this.timezone)

  //  this.setTimeAndCompare(this.timezone );
  })
}



/*


convertTo24Hour(time) {
  var hours = parseInt(time.substr(0, 2));
  if(time.indexOf('am') != -1 && hours == 12) {
      time = time.replace('12', '0');
  }
  if(time.indexOf('pm')  != -1 && hours < 12) {
      time = time.replace(hours, (hours + 12));
  }
  return time.replace(/(am|pm)/, '');
}
*/
/*
setTimeAndCompare(time){

  var d = new Date();
   
    console.log(this.timezone)
    this.timezone = this.timezone.toString() +  ':00'
    this.timezone = time

    console.log(this.timezone)

    console.log(this.sunrise)

    var dusk = new Date();
    dusk.setHours(24,59,59);
    this.dusk = dusk.toString().substring(16,21)  + ':00'
    console.log ('Dusk: ' + this.dusk)
   

    var morning = new Date();
    morning.setHours(6,40,0)
    this.morning = morning.toString().substring(16,21) + ':00'
    console.log ('Morning: ' + this.morning)


    var afternoon = new Date();
    afternoon.setHours(12,45);  
   this.afternoon = afternoon.toString().substring(16,21)  + ':00'
   console.log ('Afternoon: ' + this.afternoon)


    var evening = new Date();
    evening.setHours(18,0,0); // 6.00 pm
    this.evening = evening.toString().substring(16,21) + ':00'
    console.log ('Evening: ' + this.evening)


    var night = new Date();
    night.setHours(20,0,0); // 8.00 pm
    this.night = night.toString().substring(16,21) + ':00'
    console.log ('Night: ' + this.night)


console.log('*******')
  console.log('Local time: ' + this.timezone)
  console.log('Dusk: ' + this.dusk)
  console.log('Morning: ' + this.morning)
  console.log('Afternoon: ' + this.afternoon)

  console.log('' + this.evening)
  console.log(this.night)

  console.log('*******')


    if ( this.timezone.toString()  >= this.morning.toString() &&  this.timezone.toString() <= this.afternoon.toString()) {

      console.log("IT IS MORNING TIME")
      this.morning_flag = true;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = false;
    }


    if (this.timezone >= this.afternoon && this.timezone <= this.evening) {

      console.log('Local time: ' + this.timezone)
      console.log('Afternoon: ' + this.afternoon)
      console.log('Evening: ' + this.evening)


      //day time (afternoon)
      console.log("IT IS DAY TIME")
      this.morning_flag = false;
      this.dayTimeFlag = true;
      this.evening_flag = false;
      this.night_flag = false;

    }
  
    if (this.timezone >= this.evening  &&  this.timezone < this.night) {


      console.log('Local time: ' + this.timezone)
      console.log('Afternoon: ' + this.afternoon)
      console.log('Evening: ' + this.evening)


      console.log("IT IS EVENING TIME")
       this.morning_flag = false;
       this.dayTimeFlag = false;
       this.evening_flag = true;
       this.night_flag = false;
    } 

    if (this.timezone>= this.night && this.timezone < this.dusk) {

      console.log("IT IS NIGHT TIME")

      this.morning_flag = false;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = true;

      
    } 


    if (this.timezone.toString() <= this.dusk.toString() && this.timezone.toString() < this.morning.toString()) {

      console.log("IT IS STILL DUSK TIME")
  
      this.morning_flag = false;
      this.dayTimeFlag = false;
      this.evening_flag = false;
      this.night_flag = true;

      
    }

    console.log('dmn')
}

*/

}
