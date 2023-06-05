var searchInputSubmitEl = document.querySelector('#button');
var mainCardEl = document.querySelector(".mainCard");
var iframeMap = document.querySelector("#iframeMap");
var realEstateMemberData;
var realEstateMemberCities = ["Iowa", "Michigan", " Lincoln", " Nashville", "Northumberland", " Kentucky", "Arizona", "Hawaii", "Colorado", "Hampshire UK"];

document.querySelector("#format-input").addEventListener('change', onSelectMemeber);


function getMemberData() {
  var memberDetails = 'https://api.bridgedataoutput.com/api/v2/OData/test/Member?access_token=6baca547742c6f96a6ff71b138424f21';
  fetch(memberDetails)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      realEstateMemberData = data.value;
      buildMemberDropDown(realEstateMemberData);
      return;
    })
}

function buildMemberDropDown(realEstateMemberData) {
   var searchformEl = document.getElementById('format-input');
  var optEl = document.createElement('option');
  optEl.value = "";
  optEl.innerHTML = "Select a member";
  searchformEl.append(optEl);
  for (let i = 0; i < 10; i++) {
    optEl = document.createElement('option');
    optEl.value = realEstateMemberData[i].MemberStateLicense;
    console.log(optEl.value);
    optEl.innerHTML = realEstateMemberData[i].MemberFullName;
    searchformEl.append(optEl);
  }

}

function displayMemberDetails(licenseNumber) {
  mainCardEl.innerHTML = null;
  mainCardEl.style.display = "none";
  for (let i = 0; i < 10; i++) {
    
    if (licenseNumber === realEstateMemberData[i].MemberStateLicense) {
      mainCardEl.style.display = "block";
      iframeMap.src = "https://maps.google.com/maps?width=520&;height=400&q=Space+Needle," + realEstateMemberCities[i] + "&output=embed";
      var memberCardEl = document.createElement("div");
      var memberDetails = document.createElement("div");
      var memberNameEl = document.createElement("h1");
      var jobTitleEl = document.createElement("p");
      var officeNameEl = document.createElement("p");
      var cityEl = document.createElement("p");
      var stateEl = document.createElement("p");
      var statusEl = document.createElement("p");
      var memberImg = document.createElement("img");
      

      memberCardEl.classList.add("card");
      memberDetails.classList.add("memberDetails")
      memberImg.classList.add("memberImg")
      memberNameEl.classList.add("h1");
      jobTitleEl.classList.add("memberdata");
      officeNameEl.classList.add("memberdata");
      cityEl.classList.add("memberdata");
      stateEl.classList.add("memberdata");
      statusEl.classList.add("memberdata");
    
      memberImg.setAttribute("src", "./images/" + licenseNumber + ".jpg");
      memberNameEl.textContent = "FullName: " + realEstateMemberData[i].MemberFullName;
      jobTitleEl.textContent = "JobTitle: " + realEstateMemberData[i].JobTitle;
      officeNameEl.textContent = "Office: " + realEstateMemberData[i].OfficeName;
      cityEl.textContent = "City: " + realEstateMemberData[i].MemberCity;
      stateEl.textContent = "State: " + realEstateMemberData[i].MemberStateOrProvince;
      console.log(realEstateMemberData[i].MemberStateOrProvince);
      statusEl.textContent = "Status: " + realEstateMemberData[i].MemberStatus;

      memberDetails.append(jobTitleEl, officeNameEl, cityEl, stateEl, statusEl, memberImg);
      memberCardEl.append(memberNameEl,memberDetails, memberImg)
      mainCardEl.append(memberCardEl);
    }
  }
}

function onSelectMemeber(event) {
  var inputValueEl = event.target.value;
  displayMemberDetails(inputValueEl);

}

mainCardEl.style.display = "none";
getMemberData();