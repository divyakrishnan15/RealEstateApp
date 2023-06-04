var selectEl = document.getElementById("officeList");
var DisplayElem = document.getElementById("cardDisplay");
var mediaCard = document.getElementById("mediaCard");


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
      let x = selectEl.value;
      console.log(x);
      console.log("YAYYY!");


      let links = [
        "https://photos.zillowstatic.com/fp/1ee9655f1f9362c0018d756753e42644-se_large_800_400.webp",
        "https://www.jerde.com/thumbs/800x0/files/wonly/v2-jerde-hires-john-pauline_15899.jpg" , 
        "https://beverlyboy.com/wp-content/uploads/2018/03/photodune-21479704-charlotte-north-carolina-xxl-1024x683.jpg" ,
        "https://tse1.explicit.bing.net/th?id=OIP.IVdvLAS5113bzF-JOm2BDwHaFj&pid=Api&P=0&h=180" ,
        "https://3.bp.blogspot.com/-mbBCr-PLf3s/Wj4y1LqF2AI/AAAAAAAAAuY/yVHqruI3cS43oKtVwdLq2s8oHIp5PDD_gCPcBGAYYCw/s1600/Archkala%2B-%2BReal%2BEstate%2BOffice004.jpg" ,
        "http://a.mktgcdn.com/p/8ge9G0oXB07QyWcoRi3CUWkxIsCzRP-A6YcW9RQwKwg/260x260.jpg" ,
        "https://www.endeavor-re.com/assets/images/cache/bankPlaza-c0b831eaa5bd37beafad911007f35ff0.jpg",
        "https://officesnapshots.com/wp-content/uploads/2019/09/4-degrees-real-estate-offices-spokane.jpg" ,
        "https://www.brownrealtyco.com/wp-content/uploads/2021/10/image002-1536x664.jpg",
        "https://gbdmagazine.com/wp-content/uploads/2020/08/tmk-law-office-studio-ma-gbd-magazine-03.jpg"

      ];


      var j = x;

      var divRow = document.createElement("div");
      divRow.classList.add("row")

      var officeName = document.createElement("h2");
      officeName.classList.add("officesName");
      officeName.innerHTML = String(data.bundle[x].OfficeName);
      console.log(officeName);

      var cardImgMapContainer = document.createElement("div");
      cardImgMapContainer.classList.add("cardImg");


      var cardElem = document.createElement("div");
      cardElem.classList.add("card");


      var addressOne = document.createElement("p");
      addressOne.classList.add("details");
      addressOne.innerHTML = " Office address: " + String(data.bundle[x].OfficeAddress1) + ", " + String(data.bundle[x].OfficePostalCode);
      console.log(addressOne);

      var province = document.createElement("p");
      province.classList.add("details");
      province.innerHTML = "State / Province: " + String(data.bundle[x].OfficeStateOrProvince);
      console.log(province);

      var emailId = document.createElement("p");
      emailId.classList.add("details");
      emailId.innerHTML = " email: " + String(data.bundle[x].OfficeEmail);
      console.log(emailId);

      var phone = document.createElement("p");
      phone.classList.add("details");
      phone.innerHTML = " phone No.: " + String(data.bundle[x].OfficePhone);
      console.log(phone);

      var worksWith = document.createElement("p");
      worksWith.classList.add("details");
      worksWith.innerHTML= "Works with : "+ String(data.bundle[x].SyndicateTo);

      var officeStatus = document.createElement("p");
      officeStatus.classList.add("details");
      officeStatus.innerHTML = "Office status : "+ String(data.bundle[x].OfficeStatus)

      cardElem.append(addressOne, province, emailId, phone, officeStatus, worksWith);

     
      divRow.append(officeName)
    

      var imageContainer =document.createElement("div")
      imageContainer.classList.add("image")
      var imageElem = document.createElement("img");
      
      console.log (links[j]);
      imageElem.src = links[j]
      imageContainer.append(imageElem)

      
      cardImgMapContainer.append(cardElem,imageContainer)
      divRow.append(cardImgMapContainer)
    
      mediaCard.append(divRow);
     

      
    });
  return;


});
