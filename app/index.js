import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myHour = document.getElementById("myHour");
const myMin = document.getElementById("myMin");

const myDate = document.getElementById("myDate");
const myMonth = document.getElementById("myMonth");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
   myHour.text = `${hours}`;
   myMin.text = `${mins}`;
}

let today = new Date();
let month = today.toLocaleString('en-GB', { month: 'short' });
let date = today.getDate();

myDate.text = `${date}`;
myMonth.text = `${month}`;