//https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21
//https://api.bridgedataoutput.com/api/v2/OData/reviews/Reviews?access_token=5fe053a83789f21fe9cde2abd8a2d1bf

function fetchAgentData() {
       var agentDetails = 'https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21'
       fetch(agentDetails)
       .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              data.forEach(agent => {
                     const agentInfo =   `<li>${agent.MemberFullName}</li>`
                     document.querySelector('display-agent').insertAdjacentHTML('beforeend', agentInfo);
              })
              //console.log(data);
            });
};
fetchAgentData();





