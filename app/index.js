import clock from "clock";
import document from "document";
import { battery } from "power";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myHour = document.getElementById("myHour");
const myMin = document.getElementById("myMin");
const myDate = document.getElementById("myDate");
const myDayName = document.getElementById("myDayName");
const myBattery = document.getElementById("myBattery");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = ("0" + hours % 12 || 12).slice(-2);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
   myHour.text = `${hours}`;
   myMin.text = `${mins}`;
}

let batteryLife = Math.floor(battery.chargeLevel) + "%";

let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let days = ["SUN", "MON", "TUE", "THU", "FRI", "SAT"];

let today = new Date();
let month = months[today.getMonth()];
let dayName = days[today.getDay()];
let date = ("0" + today.getDate()).slice(-2);

myDate.text = `${date} ${month}`;
myDayName.text = `${dayName}`;
myBattery.text = `${batteryLife}`;