// here i have tried both arrow function and regular funtions.
function getWeather() {
  // fetch the client ip-address and pass to the request to the weather-api. On page Aboutme
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((response) => {
      getWweatherData(response.ip);
    });
}

function getWweatherData(ipadress) {
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=bd524cd22185428ab6d175655233001&q=" +
      ipadress +
      "&days=3&aqi=no&alerts=no&lang=sv"
  )
    .then((response) => response.json())
    .then((response) => {
      let conditionText = response.current.condition.text;
      let conditionIcon = response.current.condition.icon;

      let conditionElementText = document.getElementById("weatherText");
      let conditionElementIcon = document.getElementById("weatherIcon");

      conditionElementText.innerText = conditionText.toLowerCase();
      conditionElementIcon.src = conditionIcon;

      console.log(conditionText);
      console.log(conditionIcon);
    });
}

getWeather();
// expandeble button on the CV on the page myWork, eventlistener listens to click
let coll = document.getElementsByClassName("expandable");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
}
