var selectEl = document.getElementById("officeList");
var DisplayElem = document.getElementById("cardDisplay");

selectEl.addEventListener('change', function(event){
  event.preventDefault(); 
  fetch('https://api.bridgedataoutput.com/api/v2/test/offices?access_token=6baca547742c6f96a6ff71b138424f21')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetching Office Data!!!");
      console.log(data);
      console.log("Moment of truth!!!!!!");
      let i = selectEl.value;
      console.log(i);
      console.log("YAYYY!");

      var cardElem = document.createElement("div");
      cardElem.classList.add("card");

      var officeName = document.createElement("p");
      officeName.classList.add("details");
      officeName.innerHTML = " Office Name: " + String(data.bundle[i].OfficeName);
      console.log(officeName);

      var addressOne = document.createElement("p");
      addressOne.classList.add("details");
      addressOne.innerHTML = " Office address: " + String(data.bundle[i].OfficeAddress1) + ", " + String(data.bundle[i].OfficePostalCode);
      console.log(addressOne);

      var province = document.createElement("p");
      province.classList.add("details");
      province.innerHTML = "State / Province: " + String(data.bundle[i].OfficeStateOrProvince);
      console.log(province);

      var emailId = document.createElement("p");
      emailId.classList.add("details");
      emailId.innerHTML = " email: " + String(data.bundle[i].OfficeEmail);
      console.log(emailId);

      var phone = document.createElement("p");
      phone.classList.add("details");
      phone.innerHTML = " phone No.: " + String(data.bundle[i].OfficePhone);
      console.log(phone);

      cardElem.append(officeName, addressOne, province, emailId, phone);
      dataCard.append(cardElem);
    });
  return;
});
