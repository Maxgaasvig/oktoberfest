


/* -------------------------------- JS for Vejr -------------------------------- */

  
        const token = "5f592035d616f070a6ff8308534a4ddd"; // save your token in this variable

        const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=" +
            token +
            "&units=metric";

        $(document).ready(function() {

            // get the weather data
            fetch(aarhus).then(response => {
                return response.json();
            }).then(data => {

                // solnedgang
                var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
                var sunset = new Date(sunsetMs);

                // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
                var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();

                // Work with JSON data here
                console.log(data); // show what's in the json

                // append = da. tilføj (noget tilføjes et element med id="result"
                $('#result').append(
                    // tilføjer ("append") en div til vejroplysninger
                    '<div class="weatherInfo">' +
                    data.weather[0].main +
                    ' in ' +
                    // tilføjer bynavn
                    data.name +
                    // tilføjer vejrsymbol
                    '<figure><img src="http://openweathermap.org/img/w/' +
                    data.weather[0].icon +
                    '.png" alt="The weather : ' +
                    data.weather[0].main +
                    '"></figure>' +
                    '</div>');

                // here are the icons: https://openweathermap.org/weather-conditions 

            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...');
            });

        }); // document ready end
