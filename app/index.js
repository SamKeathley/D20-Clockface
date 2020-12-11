import clock from 'clock'
import document from 'document'
import { battery } from 'power'
import { preferences } from 'user-settings'
import * as util from '../common/utils'

const myHour = document.getElementById('myHour')
const myMin = document.getElementById('myMin')
const myDate = document.getElementById('myDate')
const myDayName = document.getElementById('myDayName')
const myBattery = document.getElementById('myBattery')

clock.granularity = 'minutes'
clock.ontick = (evt) => {
  let today = evt.date
  let hours = today.getHours()
  if (preferences.clockDisplay === '12h') {
    // 12h format
    hours = hours % 12
    hours = util.zeroHour(hours ? hours : 12)
  } else {
    // 24h format
    hours = util.zeroPad(hours)
  }
  let mins = util.zeroPad(today.getMinutes())
  myHour.text = `${hours}`
  myMin.text = `${mins}`
}

function updateBattery() {
  let batteryLife = Math.floor(battery.chargeLevel) + '%'
  myBattery.text = `${batteryLife}`
}

updateBattery()
setInterval(updateBattery, 10000)

function updateDate() {
  let months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
  ]
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  let today = new Date()
  let month = months[today.getMonth()]
  let dayName = days[today.getDay()]
  let date = ('0' + today.getDate()).slice(-2)
  myDate.text = `${date} ${month}`
  myDayName.text = `${dayName}`
}

updateDate()
setInterval(updateDate, 10000)
