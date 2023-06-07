var requestUrl = "https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21";
var display = document.querySelector("#display-agent");
var input = document.querySelector('#input');

const getData = async () => {
    var res = await fetch(requestUrl);
    var data = await res.json();
    console.log(data);
    return data
}

const displayAgent = async () => {
    
       let query = input.value; 
       console.log("Query::", query);
      
    var payload = await getData();
    
    let dataDisplay = payload.bundle.filter((eventData) => {
       if (query === "") {return eventData}
       else if (eventData.MemberFullName.toLowerCase().includes(query.toLowerCase())) {return eventData}
    }).map((object) => {
       //  console.log(object);
        const { MemberFullName, MemberType, OfficeName, MemberOfficePhone, MemberStateOrProvince, MemberCountry, MemberAddress1, MemberLanguages } = object;

        return `
        <div class="agent-container">
            <h4>Name: ${MemberFullName}</h4>
            <p>Type: ${MemberType}</p>
            <p>Office: ${OfficeName}</p>
            <p>Phone No.: ${MemberOfficePhone}</p>
            <p>Location: ${MemberAddress1}, ${MemberStateOrProvince}</p>
            <p>Language: ${MemberLanguages}</p>
        </div>
        `
    }).join("");

    display.innerHTML = dataDisplay;
}
displayAgent();

input.addEventListener("input", () =>{
       displayAgent();
});



//https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21
//https://api.bridgedataoutput.com/api/v2/OData/reviews/Reviews?access_token=5fe053a83789f21fe9cde2abd8a2d1bf

// var agentInfo = 'https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21';
// var agentCardEl = document.querySelector(".agent-card");
// var agentData;

// function getAgentInfo() {
     
//        fetch(agentInfo)
//          .then(function (response) {
//            return response.json();
//          })
//          .then(function (data) {
//            console.log(data);
//        //     agentData = data.value;
//        //     agentNameDD(agentData);
//            return;
//        })
// }

// var agentCardEl = document.querySelector(".agent-card");
// var selectLangdd = document.querySelector(".select-language");
// var selectNamedd = document.querySelector(".select-name");
// var modalMainEl = document.querySelector("#myModal");


// var lang = "";
// var langValue = "";
// var name = "";
// var selectedAgent = "";
// var filterByName = [];
// var filterByLang = [];
// var agentData = [];

// function filterName() {

// };

// function filterLang() {
//        selectLangdd.value = "0";
//        filterByLang = [];
//        lang = selectLangdd.options[selectLangdd.selectedIndex].text;
//        langValue = selectLangdd.value;
       
//        if(lang) {
//               agentData.bundle && agentData.filter((i) => {
//                      if(i.MemberLanguages === lang) {
//                             filterByLang.push(i);
//                             agentCardEl.innerHTML ="";
//                             listAgent(filterByLang);
//                      }
//               });
//        }
//  }    

// var getApiData = (value) => {
//        if (!value) {
//          var requestUrl =
//            "https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21";
//        } else {
//          var requestUrl =
//            "https://api.bridgedataoutput.com/api/v2/test/agents/" +
//            value +
//            "?access_token=6baca547742c6f96a6ff71b138424f21";
//        }
//        fetch(requestUrl)
//          .then(function (response) {
//            if (response.ok) {
//              response.json().then(function (data) {
//                agentData = data;
//                agentCardEl.innerHTML = "";
//                listAgent(data);
//              });
//            }
//          })
//          .catch(function (error) {
//            console.log("Unable to connect");
//          });
//      };
//      getApiData();



// function listAgent(data) {
//   var agentapibundle = data.bundle;

//   if (data.status === 200) {
//        agentapibundle = data.bundle;
//     pageCard(agentapibundle);
//   } else if (typeof data == "object") {
//     apidatabundle = data;
//     pageCard(agentapibundle);
//   }
// }

// function pageCard(agentapibundle) {
//        Object.values.map((i) => {


//               var mainAgentCard = document.createElement("div");
//               mainAgentCard = "card-agent center";
//               mainAgentCard.addEventListener("click", (event) => showAgent(i, event));
//               mainAgentCard.appendChild(agentCardEl);

//               var agentMainEl = document.createElement("div");
//               agentMainEl.classList = "agent-list-main center";

//               var listAgentName = document.createElement("h4");
//               listAgentName.classList = "list-agent-name center";
//               listAgentName.textContent = i.MemberFullName
//               agentMainEl.appendChild(listAgentName);

//               var listAgentTitle = document.createElement("p");
//               listAgentTitle.classList = "list-agent-title center";
//               listAgentTitle.textContent = i.MemberType
//               agentMainEl.appendChild(listAgentTitle);

//               var listOfficeName = document.createElement("p");
//               listOfficeName.classList = "list-agent-office center";
//               listOfficeName.textContent = i.OfficeName
//               agentMainEl.appendChild(listOfficeName);

//               var listAgentNumber = document.createElement("p");
//               listAgentNumber.classList = "list-agent-number center";
//               listAgentNumber.textContent = i.MemberOfficePhone
//               agentMainEl.appendChild(listAgentNumber);

//               var listAgentAddress = document.createElement("p");
//               listAgentAddress.classList = "list-agent-address center";
//               listAgentAddress.textContent = i.MemberAddress1 + ", " + i.MemberCity + ", " + i.MemberCountry
//               agentMainEl.appendChild();

//               mainAgentCard.appendChild(agentMainEl);
//        });
// }

// function showAgent(i, event) {
//        selectedAgent = event.target.textContent.split("|")[1];

//        modalMainEl.style.display = "flex";

//        document.querySelector(".modal-list-name").textContent = i.MemberFullName;
//        document.querySelector(".modal-list-title").textContent = i.MemberType;
//        document.querySelector(".modal-list-office").textContent = i.OfficeName;
//        document.querySelector(".modal-list-number").textContent = i.MemberOfficePhone;
//        document.querySelector(".modal-list-address").textContent = i.MemberAddress1;
//        return selectedAgent;

// }





 // var agentContainer = document.getElementById('card');

// function displayAgents() {
//        fetch(requestUrl)
//        .then(function (response) {
//          return response.json();
//        })
//        .then(function (data) {
//          console.log(data);
//          for (var i = 0; i < 10; i++) {
//               var agentName = document.createElement('h4');
//               var agentTitle = document.createElement('p');
//               var agentNumber = document.createElement('p');
//               var agentAddress = document.createElement('p');
//               var agentOffice = document.createElement('p');
//               agentName.textContent = data.bundle[i].MemberFullName;
//               agentTitle.textContent = data.bundle[i].MemberType;
//               agentOffice.textContent = data.bundle[i].OfficeName;
//               agentNumber.textContent = data.bundle[i].MemberOfficePhone;
//               agentAddress.textContent = data.bundle[i].MemberAddress1;
//               agentContainer.append(agentName);
//               agentContainer.append(agentOffice);
//               agentContainer.append(agentTitle);
//               agentContainer.append(agentNumber);
//               agentContainer.append(agentAddress);
//          }
//        });     
// }
// displayAgents();

