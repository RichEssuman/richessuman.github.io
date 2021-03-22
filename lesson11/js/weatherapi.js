const apiURL =
  "https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=bd16d344c83fbda10ca05b10f8f9a61d&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Current Weather
    document.getElementById(
      "current-temp"
    ).textContent = jsObject.list[0].main.temp.toFixed(0);
    //current weather icon
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      jsObject.list[0].weather[0].icon + ".png";
    const desc = jsObject.list[0].weather[0].description;
    document.getElementById("currently").textContent = desc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);
    //humidity
    document.getElementById("humidity").textContent =
      jsObject.list[0].main.humidity;
    document.getElementById(
      "wind_speed"
    ).textContent = jsObject.list[0].wind.speed.toFixed(0);
    //five-day forecast
    const windcheck = jsObject["list"];
    let day = 0;

    //let newArr = jsObject.list.filter((dt_txt) =>  (dt_txt )
    let dt = windcheck[day].dt_txt;

    for (day = 0; day < windcheck.length; day++) {
      // let yes = console.log(dt.includes('18:00:00'));

      //day names
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let d = new Date(windcheck[day].dt_txt);
      console.log(d);
      document.getElementById("dayname").textContent =
        weekdays[d.getDay()];

      //daily temps
      let h = windcheck[day].main.temp.toFixed(0);
      document.getElementById(`hightemp${day + 1}`).textContent = h;

      //daily weather icons
      const imagesrc1 =
        "https://openweathermap.org/img/w/" + windcheck[day].weather[0].icon + ".png";
      let pic = windcheck[day].weather[0].icon;
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc1);
  }
});
