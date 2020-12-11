// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

// Add zero in front of numbers < 12 for the hour
export function zeroHour(j) {
  if (j < 12) {
    j = '0' + j
  }
  return j
}
