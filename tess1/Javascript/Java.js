var time = document.querySelector("#time")
var date = document.querySelector("#date")

function setTime() {
  var now = new Date()

  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()
  var day = now.getDate()
  var month = now.getMonth() + 1
  var year = now.getFullYear()

  var ampm = hours >= 12 ? "PM" : "AM"
  hours = hours > 12 ? hours - 12 : hours

  if (hours < 10) {
    hours = "0" + hours
  }

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  if (seconds < 10) {
    seconds = "0" + seconds
  }

  if (day < 10) {
    day = "0" + day
  }

  if (month < 10) {
    month = "0" + month
  }

  var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm
  var currentDate = day + "/" + month + "/" + year

  time.textContent = currentTime
  date.textContent = currentDate
}

setInterval(setTime, 1000)
setTime()