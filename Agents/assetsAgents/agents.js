var requestUrl = "https://api.bridgedataoutput.com/api/v2/test/agents?access_token=6baca547742c6f96a6ff71b138424f21";
var display = document.querySelector("#display-agent");
var input = document.querySelector('#input');
// var input2 = document.querySelector('#input2');

const getData = async () => {
    var res = await fetch(requestUrl);
    var data = await res.json();
    console.log(data);
    return data
}

const displayAgent = async () => {
    
       let query = input.value; 
       console.log("Query::", query);

       // let query2 = input.value;
       // console.log("Query::", query);
      
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





