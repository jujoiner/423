var key = "53599ec288054906a0a203018222908";
var baseURL = "http://api.weatherapi.com/v1/";

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${year}-${month}-${day}`;
  console.log(fullDate);
  return fullDate;
}

function getCurrentWeather(location) {
  const currentDate = getCurrentDate();
  $.get(
    `${baseURL}forecast.json?key=${key}&q=${location}&dt=${currentDate}&aqi=no&alerts=no`,
    (data) => {
      console.log(data);
      $("#results").html(
        
            `<div class="title">`+
            data.location.name + ` ` +data.location.region 
            +`'s Weather`+
            `</div>`+

            `<div class="stats">`+
            
            `<div class="stat">
            <p class="stattitle">Date: </p>
            <p>` +
            data.location.localtime +
            `</p>
            </div>`+
            
            `<div class="stat">
            <p class="stattitle">Weather Condition: </p>
            <p>` +
            data.current.condition.text +
            `</p> 
            </div>`+

            `<div class="stat">
            <p class="stattitle">Current Temperature: </p>
            <p>` +
            data.current.temp_f +
            "°F" +
            `</p> 
            </div>`+

            `<div class="stat">
            <p class="stattitle">Temperature High: </p>
            <p>` +
            data.forecast.forecastday[0].day.maxtemp_f +
            "°F" +
            `</p>
            </div>`+

            `<div class="stat">
            <p class="stattitle">Temperature Low: </p>
            <p>` +
            data.forecast.forecastday[0].day.mintemp_f +
            "°F" +
            `</p> 
            </div>`+
            
            `<div class="stat sunrise">
            <p class="stattitle">Sunrise: </p>
            <p id="sunrise">` +
            data.forecast.forecastday[0].astro.sunrise +
            `</p> 
            <img id="piccard" src="../images/sunrise.png">
            </div>`+

            `<div class="stat sunset">
            <p class="stattitle">Sunset: </p>
            <p id="sunset">` +
            data.forecast.forecastday[0].astro.sunset+
            `</p>
            <img id="piccard" src="../images/sunset.png" 10px> 
            </div>`+
        `</div>`
      );
  
}).fail(function (e) {
  Swal.fire({
    title: "Sorry we've never heard of this place.",
    icon: "warning",
    html:
      "We will have to take a vacatioin there first, but please tell us all about it." +"</br>"+
      '<input "style="text-decoration: none;height:50px;" />',
    showCancelButton: false,
    showConfirmButton: true,
  });
});
}

export { getCurrentWeather };
