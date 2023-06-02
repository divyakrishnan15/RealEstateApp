let queryURL = "https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21";
       fetch(queryURL)
       .then(res => res.json())
        .then(data => console.log(data))