let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=48d210ed2b17bbe738f43d80471108c4";
       fetch(queryURL)
       .then(res => res.json())
        .then(data => console.log(data))